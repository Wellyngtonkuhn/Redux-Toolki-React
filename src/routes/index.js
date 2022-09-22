import { Routes, Route } from "react-router-dom";
import Counter from "../pages/Counter";

import Home from "../pages/Home";
import PriveteRoutes from "./PriveteRoutes";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PriveteRoutes />}>
        <Route path="counter" element={<Counter />} />
      </Route>
    </Routes>
  );
}
