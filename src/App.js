import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const TOTAL = 90;

  const [bolas, setBolas] = useState([]);
  const [bolaPrincipal, setBolaPrincipal] = useState('');
  const [historico, setHistorico] = useState([]);
  const [mostrarGrande, setMostrarGrande] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  const timeoutRef = useRef(null);

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

  function sortear() {
    if (mostrarGrande) return;
    const disponiveis = [];
    for (let i = 1; i <= TOTAL; i++) {
      if (!bolas[i]) disponiveis.push(i);
    }
    if (disponiveis.length === 0) {
      alert('Todas as bolas já foram sorteadas!');
      return;
    }
    const sorteado = disponiveis[Math.floor(Math.random() * disponiveis.length)];
    marcarBola(sorteado);
  }

  function marcarBola(n) {
    const novas = [...bolas];
    novas[n] = true;
    localStorage.setItem("bola_" + n, true);
    setBolas(novas);
    setBolaPrincipal(n);
    setHistorico(prev => [n, ...prev]);
    setMostrarGrande(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setMostrarGrande(false), 3000);
  }

  function confirmarNovaPartida() {
    localStorage.clear();
    window.location.reload();
  }

  function renderCelulas(inicio) {
    return (
      <div className="grid-coluna">
        {Array.from({ length: 15 }, (_, i) => {
          const num = inicio + i;
          const sorteada = bolas[num];
          const ultima = num === bolaPrincipal;
          return (
            <div
              key={num}
              className={`celula-grande ${sorteada ? 'sorteada' : ''} ${ultima ? 'ultima' : ''}`}
            >
              {num}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="layout">
      {mostrarGrande && (
        <div className="overlay">
          <div className="numero-grande">{bolaPrincipal}</div>
        </div>
      )}

      {/* MODAL COM ESTILOS INLINE - GARANTIDO VISÍVEL */}
      {mostrarModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(12px)',
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
            }}>Tem certeza que deseja reiniciar o jogo?</p>
            
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
          {historico.map((num, index) => (
            <div key={index} className="item">{num}</div>
          ))}
        </div>
      </div>

      <div className="painel">
        <h1> BINGO </h1>
        <div className="display">
          <span className="bola">{bolaPrincipal || '?'}</span>
        </div>
        <button className="btn sorteio" onClick={sortear}>✨ SORTEAR ✨</button>
      </div>

      <div className="tabela">
        <div className="col">{renderCelulas(1)}</div>
        <div className="col">{renderCelulas(16)}</div>
        <div className="col">{renderCelulas(31)}</div>
        <div className="col">{renderCelulas(46)}</div>
        <div className="col">{renderCelulas(61)}</div>
        <div className="col">{renderCelulas(76)}</div>
      </div>

      <div className="footer">
        <button className="btn btn-reset" onClick={() => setMostrarModal(true)}>🔄 Nova partida</button>
      </div>
    </div>
  );
}