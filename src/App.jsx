import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaInicial from "./Components/TelaInicial";
import Questoes from "./Components/Pages/Questao";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/questoes" element={<Questoes />} />
      </Routes>
    </Router>
  );
}

export default App;
