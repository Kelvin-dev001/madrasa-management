// Shared types across frontend and backend

export type Gender = "Male" | "Female";
export type StudentStatus = "Active" | "Inactive" | "Graduated";

export interface ParentRef {
  parent: string;
  relationship: "Father" | "Mother" | "Guardian";
  isPrimary: boolean;
}

export interface ClassHistory {
  academicYear: string;
  class: string;
  stream: string;
  status: "Promoted" | "Repeated" | "Completed";
  promotedAt: Date;
}

export interface Student {
  name: string;
  rollId: string;
  registrationDate: Date;
  gender: Gender;
  status: StudentStatus;
  currentClass: string;
  stream: string;
  currentAcademicYear: string;
  parents: ParentRef[];
  classHistory: ClassHistory[];
}