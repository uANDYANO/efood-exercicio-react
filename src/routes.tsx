import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:restaurant" element={<Perfil />} />
    <Route path="/perfil/:restaurant/:dishe" element={<Perfil />} />
  </Routes>
);

export default Router;
