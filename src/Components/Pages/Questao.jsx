import React, { useState, useEffect } from "react";
import Pergunta from "../Pergunta";
import database from "../../helpers/data-base";

function Questoes() {
  const [questaoAtual, setQuestaoAtual] = useState(1);
  const [acertos, setAcertos] = useState(0);
  const [acertou, setAcertou] = useState(null);
  const [disabled, setDisabled] = useState(false); // Estado para controlar a desabilitação dos botões

  useEffect(() => {
    localStorage.setItem("acertos", 0);
  }, []);

  const handleResposta = (respostaCorreta) => {
    if (!disabled) {
      // Verifique se os botões estão habilitados antes de processar a resposta
      if (respostaCorreta) {
        const acertosLocalStorage = Number(localStorage.getItem("acertos")) + 1;
        localStorage.setItem("acertos", acertosLocalStorage);
        setAcertos(acertosLocalStorage);
        setAcertou(true);
      } else {
        setAcertou(false);
      }

      setDisabled(true); // Desabilita os botões após a resposta do usuário

      setTimeout(() => {
        if (questaoAtual < 10) {
          setQuestaoAtual(questaoAtual + 1);
          setAcertou(null);
          setDisabled(false); // Habilita os botões para a próxima pergunta
        } else {
          const acertosLocalStorage = Number(localStorage.getItem("acertos"));
          const highScore = Number(localStorage.getItem("highScore"));

          if (acertosLocalStorage > highScore) {
            localStorage.setItem("highScore", acertosLocalStorage);
          }

          alert(`Total de Acertos: ${acertosLocalStorage}`);
          // Redirecione para a tela inicial
          window.location.href = "/";
        }
      }, 2000); // Tempo de espera para a próxima pergunta
    }
  };

  const backgroundClass =
    acertou === true ? "bg-green-500" : acertou === false ? "bg-red-500" : "";

  return (
    <div
      className={`min-h-screen ${backgroundClass} flex justify-center flex-col items-center transition-colors duration-500`}
    >
      {questaoAtual <= 10 ? (
        <>
          <Pergunta
            pergunta={database[questaoAtual].pergunta}
            imagemUrl={database[questaoAtual].imageurl}
          />
          <div className="flex justify-center gap-20 mt-20 items-center">
            {Object.keys(database[questaoAtual].respostas).map((key) => (
              <button
                key={key}
                className="bg-white shadow-2xl border-2 rounded-lg flex items-center justify-center min-w-[20vw] min-h-[15vh] max-w-[20vw] max-h-[15vh] px-6 p-10 hover:bg-gray-300"
                onClick={() =>
                  handleResposta(
                    key === database[questaoAtual].correta.toString()
                  )
                }
                disabled={disabled} // Desabilite os botões quando o estado for verdadeiro
              >
                {database[questaoAtual].respostas[key]}
              </button>
            ))}
          </div>
        </>
      ) : (
        <p>Todas as questões foram respondidas. Total de Acertos: {acertos}</p>
      )}
    </div>
  );
}

export default Questoes;
