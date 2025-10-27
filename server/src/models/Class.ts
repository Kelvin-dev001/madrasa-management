import { Schema, model, Types } from "mongoose";

const StreamSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  capacity: { type: Number, required: true },
  currentStudents: { type: Number, default: 0 },
  classTeacher: { type: Types.ObjectId, ref: "Teacher" },
  room: { type: String },
  isActive: { type: Boolean, default: true }
});

const ClassSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  level: { type: Number, required: true },
  streams: [StreamSchema],
  academicYear: { type: Types.ObjectId, ref: "AcademicYear" },
  nextClass: { type: Types.ObjectId, ref: "Class" }
}, { timestamps: true });

export const Class = model("Class", ClassSchema);