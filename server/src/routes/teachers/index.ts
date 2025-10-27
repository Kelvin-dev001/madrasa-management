import { Router } from "express";
import { Teacher } from "../../models/Teacher.js";
import { authenticateJWT } from "../../middleware/auth.js";

const router = Router();

// Protected: Create a teacher
router.post("/", authenticateJWT, async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json(teacher);
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : "An unknown error occurred" });
  }
});

// Protected: Get all teachers
router.get("/", authenticateJWT, async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;