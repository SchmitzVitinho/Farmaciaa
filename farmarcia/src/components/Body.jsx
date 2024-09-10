import React from 'react'
import './Body.css'

function Body() {
  let cont = 0;
  
  function senha() {
    cont++;
    alert('Senha número: '+cont)
  }
  
  return (
    <div className='container'>
      <div className='cima'>
      <h1>Venha para a nossa grande Inauguração!</h1>
      </div>

      <div className='meio'>
      
      <div className='meio-cima'>
      <h1>Nossos Produtos</h1>
      </div>
      
      <div className='meio-baixo'>
      <img className='imagem' src="./images/farmarcia-camiseta.PNG" alt="" />
      <img className='imagem' src="./images/farmarcia-camisetas.PNG" alt="" />
      <img className='imagem' src="./images/farmarcia-cartoes.PNG" alt="" />
      </div>

      </div>

      <div className='baixo'>
      <h2>Retire a sua senha</h2>
      <button onClick={senha} className='bnt'>senha</button>
      </div>
    </div>
  )
}

export default Body
