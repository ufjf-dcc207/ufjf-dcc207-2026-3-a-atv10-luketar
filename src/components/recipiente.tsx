interface Props {
  emojis: string[];
  clicar: () => void;
}

function Recipiente({ emojis, clicar }: Props) {
  return (
    <button onClick={clicar}>
      {emojis.map((emoji, i) => (
        <p key={i}>{emoji}</p>
      ))}
    </button>
  );
}

export default Recipiente;