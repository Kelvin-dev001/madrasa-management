type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} style={{ padding: "0.5em 1em" }}>
      {children}
    </button>
  );
}