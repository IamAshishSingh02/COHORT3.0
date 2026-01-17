import mongoose, {Schema, Document } from "mongoose"

export interface IContentChunk extends Document{
  contentId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  text: string
  embedding?: number[]
  metadata: {
    title: string
    type: string
  }
  createdAt: Date
}

const contentChunkSchema = new Schema<IContentChunk>(
  {
    contentId: {
      type: Schema.Types.ObjectId,
      ref: "Content",
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    text: {
      type: String,
      required: true
    },
    embedding: {
      type: [Number],
      default: undefined
    },
    metadata: {
      title: { type: String },
      type: { type: String }
    }
  },
  {
    timestamps: true
  }
)

contentChunkSchema.index({ userId: 1 })
contentChunkSchema.index({ contentId: 1 })

export const ContentChunk = mongoose.model<IContentChunk>("ContentChunk", contentChunkSchema)