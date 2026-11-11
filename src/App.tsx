import { useState } from "react";
import Recipiente from "./components/recipiente";
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

  return (
    <div>
      <h1>Magi Sort - Igor Knop</h1>
      <p>Atividade em sala de Desenvolvimento Web Front-End</p>

      <div className="jogo">
        {garrafas.map((garrafa, i) => (
          <Recipiente
            key={i}
            emojis={garrafa}
            clicar={() => mover(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;