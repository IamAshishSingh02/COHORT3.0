import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { validate } from "../middleware/validate.middleware";
import { createContentSchema } from "../validators/content.schema";
import { createContent, getUserContent, deleteContent } from "../controllers/content.controller";

const router = Router();

router.post("/", authMiddleware, validate(createContentSchema), createContent)
router.get("/", authMiddleware, getUserContent)
router.delete("/:id", authMiddleware, deleteContent)

export default router