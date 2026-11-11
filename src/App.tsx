import { useState } from "react";
import Tabuleiro from "./components/tabuleiro";
import "./App.css";

function App() {
  const [garrafas, setGarrafas] = useState([
    ["🍎", "🍌", "🍇"],
    ["🍇", "🍎", "🍌"],
    ["🍌", "🍇", "🍎"],
    [] as string[]
  ]);

  const [selecionado, setSelecionado] = useState(-1);

function mover(destino: number) {
  if (selecionado === -1) {
    if (garrafas[destino].length > 0) {
      setSelecionado(destino);
    }
    return;
  }
  if (selecionado === destino) {
  setSelecionado(-1);
  return;
}

  const novas = garrafas.map(g => [...g]);

  const origem = novas[selecionado];
  const chegada = novas[destino];

  if (
    origem.length > 0 &&
    chegada.length < 3 &&
    (chegada.length === 0 ||
      chegada[chegada.length - 1] === origem[origem.length - 1])
  ) {
    chegada.push(origem.pop()!);
    setGarrafas(novas);
  }

  setSelecionado(-1);
}

const venceu = garrafas.every(g =>
  g.length === 0 ||
  (g.length === 3 && g.every(e => e === g[0]))
);

function reiniciar() {
  setGarrafas([
    ["🍎", "🍌", "🍇"],
    ["🍇", "🍎", "🍌"],
    ["🍌", "🍇", "🍎"],
    []
  ]);

  setSelecionado(-1);
}

  return (
    <div>
    <h1>Magic Sort - Igor Knop</h1>
    <p>Atividade em sala de Desenvolvimento Web Front-End</p>

    <Tabuleiro
      garrafas={garrafas}
      venceu={venceu}
      mover={mover}
    />

    {venceu && <h2>Você venceu!</h2>}

    <button onClick={reiniciar}>
      Reiniciar
    </button>
  </div>
  );
}

export default App;