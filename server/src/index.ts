import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./routes/students/index.js";
import teacherRoutes from "./routes/teachers/index.js";
import classRoutes from "./routes/classes/index.js";
dotenv.config();
mongoose.connect(process.env.MONGODB_URI || "", {
    // useNewUrlParser, useUnifiedTopology no longer needed in Mongoose 6+
  })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => console.error("MongoDB Atlas connection error:", err));

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/classes", classRoutes);

app.get("/", (req, res) => {
  res.send("Madrasa Management System Backend");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});