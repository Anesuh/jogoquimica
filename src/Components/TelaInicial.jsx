import React from "react";
import { Link } from "react-router-dom";

function TelaInicial() {
  const highScore = Number(localStorage.getItem("highScore")) || 0;

  localStorage.setItem("acertos", "0");

  return (
    <div className="bg-cover bg-no-repeat bg-[url('./images/bg-inicial.jpg')] h-screen w-full flex justify-center items-center">
      <div>
        <h1 className="text-white text-5xl font-bold mb-4 absolute top-0 left-0">
          Maior pontuação: {highScore}
        </h1>
        <Link to="/questoes">
          <button className="p-5 hover:bg-zinc-100 rounded-lg bg-white text-slate-600 font-bold text-4xl animate-bounce">
            Iniciar jogo!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TelaInicial;
