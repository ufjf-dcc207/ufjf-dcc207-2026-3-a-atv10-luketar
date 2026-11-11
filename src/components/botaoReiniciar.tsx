interface Props {
  reiniciar: () => void;
}

function BotaoReiniciar({ reiniciar }: Props) {
  return (
    <button onClick={reiniciar}>
      Reiniciar
    </button>
  );
}

export default BotaoReiniciar;