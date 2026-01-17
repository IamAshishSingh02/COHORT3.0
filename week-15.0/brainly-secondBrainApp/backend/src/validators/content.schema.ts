import { z } from "zod";

export const createContentSchema = z.object({
  title: z.string().min(1, "title is required"),
  type: z.enum(["note", "link", "tweet", "video", "document", "audio"]),
  content: z.string().min(1),
  tags: z.array(z.string().min(1)).optional()
})