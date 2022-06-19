import { useState } from "react";
import {Mens} from "./components/Mens";
import { RouterPage } from "./Routes/Router";

 

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterPage />
      {/* <Mens/> */}
    </div>
  );
}

export default App;
