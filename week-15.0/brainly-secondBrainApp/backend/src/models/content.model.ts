import mongoose, { Schema, Document } from "mongoose";

export interface IContent extends Document {
  title: string
  type: "note" | "link" | "tweet" | "video" | "document" | "audio"
  content: string
  tags: string[]
  userId: mongoose.Types.ObjectId
  createdAt: Date
}

const contentSchema = new Schema<IContent>(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      enum: ["note", "link", "tweet", "video", "document", "audio"],
      required: true
    },
    content: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      default: [],
      set: (tags: string[]) => tags.map(t => t.toLowerCase())
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
)

contentSchema.index({userId: 1})
contentSchema.index({userId: 1, type: 1})
contentSchema.index({userId: 1, tags: 1})
contentSchema.index({title: "text", content: "text"})

export const Content = mongoose.model<IContent>("Content", contentSchema)