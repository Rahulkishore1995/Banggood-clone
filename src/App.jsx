import { useState } from "react";
import { RouterPage } from "./Routes/Router";
 

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterPage />
    </div>
  );
}

export default App;
