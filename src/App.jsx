import { useState } from "react";
import ChekIn from "./Pages/ChekIn";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChekIn></ChekIn>
    </>
  );
}

export default App;
