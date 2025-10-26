import { Schema, model, Types } from "mongoose";

export type Gender = "Male" | "Female";
export type StudentStatus = "Active" | "Inactive" | "Graduated";

const ParentRefSchema = new Schema({
  parent: { type: Types.ObjectId, ref: "Parent", required: true },
  relationship: { type: String, enum: ["Father", "Mother", "Guardian"], required: true },
  isPrimary: { type: Boolean, default: false }
});

const ClassHistorySchema = new Schema({
  academicYear: { type: Types.ObjectId, ref: "AcademicYear", required: true },
  class: { type: Types.ObjectId, ref: "Class", required: true },
  stream: { type: String, required: true },
  status: { type: String, enum: ["Promoted", "Repeated", "Completed"], required: true },
  promotedAt: { type: Date }
});

const StudentSchema = new Schema({
  name: { type: String, required: true },
  rollId: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  status: { type: String, enum: ["Active", "Inactive", "Graduated"], default: "Active" },
  currentClass: { type: Types.ObjectId, ref: "Class" },
  stream: { type: String },
  currentAcademicYear: { type: Types.ObjectId, ref: "AcademicYear" },
  parents: [ParentRefSchema],
  classHistory: [ClassHistorySchema]
}, { timestamps: true });

export const Student = model("Student", StudentSchema);