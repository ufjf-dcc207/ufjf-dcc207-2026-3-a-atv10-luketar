import Recipiente from "./recipiente";

interface Props {
  garrafas: string[][];
  venceu: boolean;
  mover: (numero: number) => void;
}

function Tabuleiro({ garrafas, venceu, mover }: Props) {
  return (
    <div className="jogo">
      {garrafas.map((garrafa, i) => (
        <Recipiente
          key={i}
          emojis={garrafa}
          clicar={() => {
            if (!venceu) mover(i);
          }}
        />
      ))}
    </div>
  );
}

export default Tabuleiro;