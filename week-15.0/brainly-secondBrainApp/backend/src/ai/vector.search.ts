import { ContentChunk } from "../models/contentChunk.model";
import { createEmbedding } from "./embedder";
import mongoose from "mongoose";

interface VectorSearchInput {
  userId?: string;
  query: string;
  limit?: number;
}

export const semanticSearch = async ({
  userId,
  query,
  limit = 5
}: VectorSearchInput) => {
  const queryEmbedding = await createEmbedding(query);

  const vectorSearchStage: any = {
    $vectorSearch: {
      index: "content_embedding_index",
      path: "embedding",
      queryVector: queryEmbedding,
      numCandidates: 100,
      limit
    }
  };

  if (userId) {
    vectorSearchStage.$vectorSearch.filter = {
      userId: new mongoose.Types.ObjectId(userId)
    };
  }

  const pipeline = [
    vectorSearchStage,
    {
      $project: {
        text: 1,
        metadata: 1,
        score: { $meta: "vectorSearchScore" }
      }
    }
  ];

  return ContentChunk.aggregate(pipeline);
};
