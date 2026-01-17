import mongoose from "mongoose";
import { ContentChunk } from "../models/contentChunk.model";
import { chunkText } from "./chunker";

interface ChunkInput{
  contentId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  text: string
  title: string
  type: string
}

export const createContentChunks = async ({contentId, userId, text, title, type}: ChunkInput) => {
  const chunks = chunkText(text)

  const chunkDocs = chunks.map(chunk => ({
    contentId,
    userId,
    text: chunk,
    metadata: { title, type }
  }))

  if(chunkDocs.length > 0){
    await ContentChunk.insertMany(chunkDocs)
  }
}
