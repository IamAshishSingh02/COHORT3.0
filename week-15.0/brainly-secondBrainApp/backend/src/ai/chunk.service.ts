import mongoose from "mongoose";
import { ContentChunk } from "../models/contentChunk.model";
import { chunkText } from "./chunker";
import { createEmbedding } from "./embedder";


interface ChunkInput{
  contentId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  text: string
  title: string
  type: string
}

export const createContentChunks = async ({contentId, userId, text, title, type}: ChunkInput) => {
  const chunks = chunkText(text)
  const chunkDocs = []

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OpenAI key not configured")
  }

  for(const chunk of chunks){
    const embedding = await createEmbedding(chunk)

    chunkDocs.push({
      contentId,
      userId,
      text: chunk,
      embedding,
      metadata: { title, type }
    })
  }

  if(chunkDocs.length > 0){
    await ContentChunk.insertMany(chunkDocs)
  }
}
