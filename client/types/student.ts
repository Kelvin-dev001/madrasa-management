export type Student = {
  id: string;
  name: string;
  rollId: string;
  gender: "Male" | "Female";
  status?: "Active" | "Inactive" | "Graduated";
  registrationDate?: string;
  stream?: string;
  currentClass?: string;
  currentAcademicYear?: string;
};