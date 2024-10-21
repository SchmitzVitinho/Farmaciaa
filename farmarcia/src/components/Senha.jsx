import React, { useState } from 'react';
import './Senha.css'; 
export default function Senha() {
  const [filaNormal, setFilaNormal] = useState([]);
  const [filaPreferencial, setFilaPreferencial] = useState([]);
  const [ultimaSenha, setUltimaSenha] = useState(null);
  const [contadorNormal, setContadorNormal] = useState(1);
  const [contadorPreferencial, setContadorPreferencial] = useState(1);

  const gerarSenhaNormal = () => {
    const novaSenha = `N${contadorNormal}`;
    setFilaNormal([...filaNormal, novaSenha]);
    setContadorNormal(contadorNormal + 1);
  };
 
  const gerarSenhaPreferencial = () => {
    const novaSenha = `P${contadorPreferencial}`;
    setFilaPreferencial([...filaPreferencial, novaSenha]);
    setContadorPreferencial(contadorPreferencial + 1);
  };

  const chamarProximaSenha = () => {
    if (filaPreferencial.length > 0) {
      const proxima = filaPreferencial[0];
      setUltimaSenha(proxima);
      setFilaPreferencial(filaPreferencial.slice(1));
    } else if (filaNormal.length > 0) {
      const proxima = filaNormal[0];
      setUltimaSenha(proxima);
      setFilaNormal(filaNormal.slice(1));
    } else {
      alert("Fila vazia! Não há senhas para chamar.");
    }
  };

  return (
    <div className="senha-container">
      <h2>Última senha chamada: {ultimaSenha || 'Nenhuma'}</h2>
      <div className="botoes">
        <button onClick={gerarSenhaNormal}>Gerar Senha Normal</button>
        <button onClick={gerarSenhaPreferencial}>Gerar Senha Preferencial</button>
        <button onClick={chamarProximaSenha}>Chamar Próxima Senha</button>
      </div>
      <div className="filas">
        <p>Fila Preferencial: {filaPreferencial.join(', ') || 'Vazia'}</p>
        <p>Fila Normal: {filaNormal.join(', ') || 'Vazia'}</p>
      </div>
    </div>
  );
}