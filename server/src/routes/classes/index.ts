import { Router } from "express";
import { Class } from "../../models/Class.js";
import { authenticateJWT } from "../../middleware/auth.js";

const router = Router();

// Protected: Create a class
router.post("/", authenticateJWT, async (req, res) => {
  try {
    const classDoc = new Class(req.body);
    await classDoc.save();
    res.status(201).json(classDoc);
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : "An unknown error occurred" });
  }
});

// Protected: Get all classes
router.get("/", authenticateJWT, async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : "An unknown error occurred" });
  }
});

export default router;