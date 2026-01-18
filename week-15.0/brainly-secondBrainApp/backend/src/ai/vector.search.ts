import { ContentChunk } from "../models/contentChunk.model";
import { createEmbedding } from "./embedder";

interface VectorSearchInput{
  userId?: string
  query: string
  limit?: number
}

export const semanticSearch = async ({userId, query, limit = 5}: VectorSearchInput) => {
  const queryEmbedding = await createEmbedding(query)

  const pipeline: any[] = [{
    $vectorSearch: {
      index: "content_embedding_index",
      path: "embedding",
      queryVector: queryEmbedding,
      numCandidates: 100,
      limit
    }
  }]

  if(userId){
    pipeline.push({
      $match: {userId}
    })
  }

  pipeline.push({
    $project: {
      text: 1,
      metadata: 1,
      score: {$meta: "vectorSearchScore"}
    }
  })

  return ContentChunk.aggregate(pipeline)
}
