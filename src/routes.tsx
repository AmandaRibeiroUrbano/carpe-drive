import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Erro from "@pages/Erro";
import Register from "@pages/Register";
import { Header } from "@components/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Register />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
