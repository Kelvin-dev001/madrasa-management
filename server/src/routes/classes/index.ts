import { Router } from "express";
import { Class } from "../../models/Class";
import { authenticateJWT } from "../../middleware/auth";

const router = Router();

// Protect classroutes
router.post("/", authenticateJWT, async (req, res) => { /* ... */ });
router.get("/", authenticateJWT, async (req, res) => { /* ... */ });

// Create a class
router.post("/", async (req, res) => {
  try {
    const classDoc = new Class(req.body);
    await classDoc.save();
    res.status(201).json(classDoc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all classes
router.get("/", async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;