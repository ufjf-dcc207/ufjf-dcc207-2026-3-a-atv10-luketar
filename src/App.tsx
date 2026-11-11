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

  return (
    <div>
      <h1>Emoji Sort 🧩</h1>
      <p>Organize os emojis iguais!</p>

      <div className="jogo">
        {garrafas.map((garrafa, i) => (
          <Recipiente
            key={i}
            emojis={garrafa}
            clicar={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default App;