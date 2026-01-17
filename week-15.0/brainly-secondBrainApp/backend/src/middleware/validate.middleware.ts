import { ZodType  } from "zod";
import { Request, Response, NextFunction } from "express"

export const validate = (schema: ZodType<any, any, any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try{
      schema.parse(req.body)
      next()
    }
    catch(error: any){
      return res.status(400).json({
        message: "Validation failed",
        errors: error.issues
      })
    }
  }