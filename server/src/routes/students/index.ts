import { z } from "zod";
import { authenticateJWT } from "../../middleware/auth";



const studentSchema = z.object({
  name: z.string().min(3),
  rollId: z.string().min(4),
  gender: z.enum(["Male", "Female"]),
  status: z.enum(["Active", "Inactive", "Graduated"]).optional(),
  registrationDate: z.string().optional(),
  stream: z.string().optional(),
  currentClass: z.string().optional(),
  currentAcademicYear: z.string().optional(),
  parents: z.array(z.object({
    parent: z.string(),
    relationship: z.enum(["Father", "Mother", "Guardian"]),
    isPrimary: z.boolean().optional()
  })).optional(),
  classHistory: z.array(z.object({
    academicYear: z.string(),
    class: z.string(),
    stream: z.string(),
    status: z.enum(["Promoted", "Repeated", "Completed"]),
    promotedAt: z.string().optional()
  })).optional()
});

router.post("/", authenticateJWT, async (req, res) => { /* ... */ });
router.get("/", authenticateJWT, async (req, res) => { /* ... */ });

router.post("/", async (req, res) => {
  try {
    const parsed = studentSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.errors });
    }
    const student = new Student(parsed.data);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

