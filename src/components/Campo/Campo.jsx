import React from 'react';
import './main.sass';

function Campo({ titulo, valor, setConteudo, lista }) {
  return (
    <div className='campo-quadro'>
      <p className='titulo'>{titulo}</p>
      <select className='campo-select' name={titulo} value={valor} onChange={(e) => setConteudo(e.target.value)}>
        <option value=""></option>
        {lista.map((e, index) => (
          <option className='titulo-span' key={index} value={e.valor}>
           <p className='titulo'>{e.titulo} </p> ({e.beneficios})
          </option>
        ))}
      </select>
    </div>
  );
}

export default Campo;
