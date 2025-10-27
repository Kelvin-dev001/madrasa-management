import { Schema, model, Types } from "mongoose";

const TeacherAssignmentSchema = new Schema({
  class: { type: Types.ObjectId, ref: "Class", required: true },
  stream: { type: String, required: true },
  subjects: [{
    subject: { type: Types.ObjectId, ref: "Subject" },
    subjectName: { type: String },
    isClassTeacher: { type: Boolean, default: false }
  }],
  academicYear: { type: Types.ObjectId, ref: "AcademicYear" }
});

const TeacherSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  idNumber: { type: String, required: true, unique: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  role: { 
    type: String, 
    enum: [
      "teacher", 
      "class_teacher", 
      "hod", 
      "academic_coordinator", 
      "deputy_principal"
    ], 
    default: "teacher" 
  },
  department: { 
    type: String, 
    enum: [
      "Quran", 
      "Arabic", 
      "Islamic_Studies", 
      "Secular_Subjects"
    ]
  },
  assignments: [TeacherAssignmentSchema],
  permissions: [{ type: String }],
  verificationCode: { type: String },
  verificationExpires: { type: Date }
}, { timestamps: true });

export const Teacher = model("Teacher", TeacherSchema);