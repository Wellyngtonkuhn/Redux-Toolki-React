import { Routes, Route } from "react-router-dom";
import Counter from "../pages/Counter";

import JsonApi from "../pages/JsonApi";
import RockSeatCursos from "../pages/RockSeatCursos";
import PriveteRoutes from "./PriveteRoutes";

export default function Rotas() {
  return (
    <Routes>
      <Route element={<PriveteRoutes />}>
        <Route path="/" element={<JsonApi />} />
        <Route path="counter" element={<Counter />} />
        <Route path="cursos" element={<RockSeatCursos />} />
      </Route>
    </Routes>
  );
}
