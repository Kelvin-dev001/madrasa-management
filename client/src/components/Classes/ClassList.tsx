type ClassType = {
  id: string;
  name: string;
  stream: string;
};

type Props = {
  classes: ClassType[];
};

export default function ClassList({ classes }: Props) {
  return (
    <ul>
      {classes.map((cls) => (
        <li key={cls.id}>
          {cls.name} ({cls.stream})
        </li>
      ))}
    </ul>
  );
}