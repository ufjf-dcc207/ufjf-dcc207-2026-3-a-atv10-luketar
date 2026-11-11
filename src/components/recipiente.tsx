import Emoji from "./emoji";

interface Props {
  emojis: string[];
  clicar: () => void;
}

function Recipiente({ emojis, clicar }: Props) {
  return (
    <button onClick={clicar}>
      {[...emojis].reverse().map((emoji, i) => (
        <Emoji key={i} simbolo={emoji} />
      ))}
    </button>
  );
}

export default Recipiente;