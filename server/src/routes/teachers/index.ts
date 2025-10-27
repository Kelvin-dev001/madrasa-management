import { Router } from "express";
import { Teacher } from "../../models/Teacher";
import { authenticateJWT } from "../../middleware/auth";
const router = Router();
// Protect teacher routes
router.post("/", authenticateJWT, async (req, res) => { /* ... */ });
router.get("/", authenticateJWT, async (req, res) => { /* ... */ });

// Create a teacher
router.post("/", async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json(teacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all teachers
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;