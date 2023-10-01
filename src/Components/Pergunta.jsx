import React from "react";

function CardResposta({ imagemUrl, pergunta }) {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <img
        className="mt-10 w-[300px] h-[300px] border-4 border-black rounded-full"
        src={imagemUrl}
        alt="a"
      />
      <h2 className="text-2xl text-slate-700 font-bold text-center">
        {pergunta}
      </h2>
    </div>
  );
}

export default CardResposta;
