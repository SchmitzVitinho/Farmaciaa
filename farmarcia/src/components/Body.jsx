import React, { useState } from 'react';
import './Body.css';
import Senha from './Senha';

function Body() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function exibirSenha() {
    setMostrarSenha(true);
  }

  return (
    <div className='container'>
      {!mostrarSenha ? (
        <>
          <div className='cima'>
            <h1>Venha para a nossa grande Inauguração!</h1>
          </div>

          <div className='meio'>
            <div className='meio-cima'>
              <h1>Nossos Produtos</h1>
            </div>

            <div className='meio-baixo'>
              <img className='imagem' src="./images/farmarcia-camiseta.PNG" alt="Produto 1" />
              <img className='imagem' src="./images/farmarcia-camisetas.PNG" alt="Produto 2" />
              <img className='imagem' src="./images/farmarcia-cartoes.PNG" alt="Produto 3" />
            </div>
          </div>

          <div className='baixo'>
            <h2>Retire a sua senha</h2>
            <button onClick={exibirSenha} className='btn'>Senha</button>
          </div>
        </>
      ) : (
        <Senha /> 
      )}
    </div>
  );
}

export default Body;