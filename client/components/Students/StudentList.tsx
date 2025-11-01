import React from "react";

type Student = {
  id: string;
  name: string;
  rollId: string;
};

type Props = {
  students: Student[];
};

export default function StudentList({ students }: Props) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} (Roll: {student.rollId})
        </li>
      ))}
    </ul>
  );
}