import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  // Gera os números válidos da tabuada (1x1 a 10x10)
  function gerarNumerosValidos() {
    const validos = new Set();
    for (let a = 1; a <= 10; a++) {
      for (let b = 1; b <= 10; b++) {
        validos.add(a * b);
      }
    }
    return Array.from(validos).sort((x, y) => x - y); // 42 números
  }

  const numerosValidos = gerarNumerosValidos();
  const TOTAL = 100;

  const [bolas, setBolas] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [mostrarOverlay, setMostrarOverlay] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [overlayData, setOverlayData] = useState(null);
  const [bloqueado, setBloqueado] = useState(false);

  function gerarOperacao(numero) {
    for (let i = 10; i >= 2; i--) {
      if (numero % i === 0) {
        const outro = numero / i;
        if (outro >= 1 && outro <= 10) {
          return `${i} x ${outro}`;
        }
      }
    }
    return `1 x ${numero}`;
  }

  useEffect(() => {
    const inicial = [];
    const hist = [];
    for (let i = 1; i <= TOTAL; i++) {
      const status = localStorage.getItem("bola_" + i);
      if (status === 'true') {
        inicial[i] = true;
        hist.unshift(i);
      } else {
        localStorage.setItem("bola_" + i, false);
        inicial[i] = false;
      }
    }
    setBolas(inicial);
    setHistorico(hist);
  }, []);

  function marcarBola(n) {
    const novas = [...bolas];
    novas[n] = true;
    localStorage.setItem("bola_" + n, true);
    setBolas(novas);
    setHistorico(prev => [n, ...prev]);
  }

  function iniciarSorteio() {
    if (bloqueado) return;
    const disponiveis = numerosValidos.filter(num => !bolas[num]);
    if (disponiveis.length === 0) {
      alert('Parabéns! Todos os números da tabuada já foram sorteados.');
      return;
    }
    const numeroSorteado = disponiveis[Math.floor(Math.random() * disponiveis.length)];
    const operacao = gerarOperacao(numeroSorteado);
    setOverlayData({
      tipo: 'pergunta',
      operacao: operacao,
      numero: numeroSorteado
    });
    setMostrarOverlay(true);
    setBloqueado(true);
  }

  function handleOverlayClick() {
    if (!overlayData) return;
    if (overlayData.tipo === 'pergunta') {
      setOverlayData({ ...overlayData, tipo: 'resposta' });
    } else {
      marcarBola(overlayData.numero);
      setMostrarOverlay(false);
      setOverlayData(null);
      setBloqueado(false);
    }
  }

  function confirmarNovaPartida() {
    for (let i = 1; i <= TOTAL; i++) localStorage.removeItem("bola_" + i);
    window.location.reload();
  }

  function renderGradePersonalizada() {
    const linhas = [];
    const totalPorLinha = 7;
    for (let i = 0; i < numerosValidos.length; i += totalPorLinha) {
      const celulas = numerosValidos.slice(i, i + totalPorLinha).map(num => (
        <div key={num} className={`celula-grande ${bolas[num] ? 'sorteada' : ''}`}>
          {num}
        </div>
      ));
      linhas.push(<div key={i} className="grid-linha">{celulas}</div>);
    }
    return <div className="grade-unica">{linhas}</div>;
  }

  return (
    <div className="layout">
      {/* Overlay de sorteio */}
      {mostrarOverlay && overlayData && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="numero-container">
            {overlayData.tipo === 'pergunta' && (
              <>
                <div className="operacao-grande">{overlayData.operacao} = ?</div>
                <div className="legenda">👆 Clique para ver a resposta</div>
              </>
            )}
            {overlayData.tipo === 'resposta' && (
              <>
                <div className="numero-grande">{overlayData.numero}</div>
                <div className="legenda-resposta">{overlayData.operacao} = {overlayData.numero}</div>
                <div className="legenda">👆 Clique para continuar</div>
              </>
            )}
          </div>
        </div>
      )}

      {/* MODAL NOVA PARTIDA - ESTILOS INLINE GARANTIDOS */}
      {mostrarModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999,
            cursor: 'pointer',
          }}
          onClick={() => setMostrarModal(false)}
        >
          <div
            style={{
              background: 'linear-gradient(145deg, #0a0f1e, #020617)',
              padding: '2rem',
              borderRadius: '40px',
              textAlign: 'center',
              border: '2px solid #0ff',
              boxShadow: '0 0 60px rgba(0,255,255,0.5)',
              width: '340px',
              cursor: 'default',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{
              fontSize: '2rem',
              background: 'linear-gradient(135deg, #0ff, #f0f)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '1rem',
              fontWeight: 'bold',
            }}>🚀 Nova partida?</h3>
            
            <p style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              marginBottom: '2rem',
              textShadow: '0 0 2px black',
            }}>Todos os números sorteados serão apagados.<br/>Deseja recomeçar?</p>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <button
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  borderRadius: '60px',
                  cursor: 'pointer',
                  background: '#2c3e50',
                  color: 'white',
                  border: '1px solid #5a6e8a',
                  fontWeight: 'bold',
                }}
                onClick={() => setMostrarModal(false)}
                onMouseEnter={(e) => e.currentTarget.style.background = '#4a627a'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#2c3e50'}
              >
                Cancelar
              </button>
              <button
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  borderRadius: '60px',
                  cursor: 'pointer',
                  background: '#e63946',
                  color: 'white',
                  border: '1px solid #ffaaaa',
                  fontWeight: 'bold',
                }}
                onClick={confirmarNovaPartida}
                onMouseEnter={(e) => e.currentTarget.style.background = '#ff4d4d'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#e63946'}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="historico">
        <h2>📜 Histórico</h2>
        <div className="lista">
          {historico.map((num, idx) => (
            <div key={idx} className="item">{num}</div>
          ))}
        </div>
      </div>

      <div className="painel">
        <h1>🔢 BINGO DA TABUADA</h1>
        <button className="btn sorteio" onClick={iniciarSorteio} disabled={bloqueado}>
          {bloqueado ? '🎲 Aguarde...' : '✨ SORTEAR ✨'}
        </button>
      </div>

      <div className="tabela">
        {renderGradePersonalizada()}
      </div>

      <div className="footer">
        <button className="btn btn-reset" onClick={() => setMostrarModal(true)}>🔄 Nova partida</button>
      </div>

      {/* Assinatura do desenvolvedor */}
      <div className="assinatura">
        Desenvolvido por Renato Nogueira <br></br>
        (EMEF Solano Trindade)
      </div>
      
    </div>
  );
}