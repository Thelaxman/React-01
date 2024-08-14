import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <div
      className="w-auto h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <button onClick={() => setColor("Green")}>Green</button>
    </div>
  );
}

export default App;
