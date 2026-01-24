import { Request, Response } from "express"
import { Content } from "../models/content.model"
import { isValidObjectId } from "mongoose";
import { createContentChunks } from "../ai/chunk.service";

export const createContent = async(req: Request, res: Response) => {
  try{
    const {title, type, content, tags} = req.body
    const userId = res.locals.userId
    
    const newContent = await Content.create({
      title,
      type,
      content,
      tags,
      userId
    })

    try{
      await createContentChunks({
        contentId: newContent._id,
        userId,
        text: content,
        title,
        type
      })
    } 
    catch(aiError: any){
      console.warn(
        "⚠️ AI chunking skipped:",
        aiError?.message || aiError
      )
    }

    return res.status(201).json({
      message: "Content created successfully",
      content: newContent
    })
  }
  catch(error: any){
    console.error("CREATE CONTENT ERROR:", error?.message || error)

    return res.status(500).json({
      message: "Failed to create content",
      error: error?.message
    })
  }
}

export const getUserContent = async (req: Request, res: Response) => {
  try{
    const userId = res.locals.userId
    const { type, tag, search } = req.query
    const filter: any = {userId}

    if(type) filter.type = type
    if(tag) filter.tags = (tag as string).toLowerCase()
    if(search){
      filter.$text = {$search: search as string}
    }

    const contents = await Content.find(filter).sort({createdAt: -1})

    return res.json({
      contents
    })
  }
  catch(error){
    console.error("Fetch Content Error:", error)
    return res.status(500).json({
      message: "Failed to fetch content"
    })
  }
}

export const deleteContent = async (req: Request, res: Response) => {
  try{
    const contentId = req.params.id
    const userId = res.locals.userId

    if (!isValidObjectId(contentId)){
      return res.status(400).json({ 
        message: "Invalid content ID format" 
      })
    }

    const deletedContent = await Content.findOneAndDelete({_id: contentId, userId})

    if(!deletedContent){
      return res.status(404).json({
        message: "Content not found or unauthorized"
      })
    }

    return res.json({
      message: "Content deleted successfully"
    })
  }
  catch(error){
    console.error("Delete Content Error:", error)
    return res.status(500).json({
      message: "Internal server error"
    })
  }
}

export const updateContent = async (req: Request, res: Response) => {
  try {
    const contentId = req.params.id;
    const userId = res.locals.userId;
    const { title, content, tags } = req.body;

    const updated = await Content.findOneAndUpdate(
      { _id: contentId, userId },
      { title, content, tags },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Content not found" });
    }

    return res.json({ content: updated });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to update content" });
  }
};
