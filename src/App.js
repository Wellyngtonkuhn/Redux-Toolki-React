import Rotas from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Rotas />
      </div>
    </BrowserRouter>
  );
}

export default App;
