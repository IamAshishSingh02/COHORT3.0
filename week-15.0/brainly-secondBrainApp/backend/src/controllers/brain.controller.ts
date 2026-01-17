import { Request, Response } from "express";
import crypto from "crypto";
import User from "../models/user.model";
import { Content } from "../models/content.model";

export const generateShareLink = async (req: Request, res: Response) => {
  try{
    const userId = res.locals.userId
    const shareToken = crypto.randomBytes(24).toString("hex")

    await User.findByIdAndUpdate(userId, {shareToken})

    return res.json({
      message: "Share link generated",
      shareUrl: `${process.env.BASE_URL}/api/v1/brain/share/${shareToken}`
    })
  } 
  catch(error){
    console.error("Generate Share Error:", error)
    return res.status(500).json({
      message: "Failed to generate share link"
    })
  }
}

export const revokeShareLink = async (req: Request, res: Response) => {
  try{
    const userId = res.locals.userId

    await User.findByIdAndUpdate(userId, {$unset: {shareToken: ""}})

    return res.json({
      message: "Share link revoked successfully"
    })
  }
  catch(error){
    console.error("Revoke Share Error:", error)
    return res.status(500).json({
      message: "Failed to revoke share link"
    })
  }
}

export const getSharedBrain = async (req: Request, res: Response) => {
  try{
    const{token} = req.params
    const user = await User.findOne({shareToken: token})

    if (!user){
      return res.status(404).json({
        message: "Invalid or expired share link"
      })
    }

    const contents = await Content.find({userId: user._id}).sort({createdAt: -1})

    return res.json({
      owner: {
        name: user.name
      },
      contents
    })
  } 
  catch(error){
    console.error("Shared Brain Error:", error)
    return res.status(500).json({
      message: "Failed to load shared brain"
    })
  }
}