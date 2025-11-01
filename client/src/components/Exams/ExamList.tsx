type Exam = {
  id: string;
  name: string;
  date: string;
};

type Props = {
  exams: Exam[];
};

export default function ExamList({ exams }: Props) {
  return (
    <ul>
      {exams.map((exam) => (
        <li key={exam.id}>
          {exam.name} - {exam.date}
        </li>
      ))}
    </ul>
  );
}