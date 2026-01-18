import { Request, Response } from "express";
import { askBrain } from "../ai/ai.service";

export const askBrainController = async (req: Request, res: Response) => {
  try{
    const question = req.body.question
    const userId = res.locals.userId

    if(!question){
      return res.status(400).json({
        message: "Question is required"
      })
    }

    const result = await askBrain({
      userId,
      question
    })

    return res.json(result)
  } 
  catch(error){
    console.error("Ask Brain Error:", error)
    return res.status(500).json({
      message: "Failed to answer question"
    })
  }
}
