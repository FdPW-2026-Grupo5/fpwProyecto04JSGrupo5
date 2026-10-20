import { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { emojisDado } from '../../data/dadosEmojis';
import './SimuladorDado.css';

function SimuladorDado({ jugador, onLanzar }) {
  const [dado, setDado] = useState(1);

  const lanzarDado = () => {
    const nuevoValor = Math.floor(Math.random() * 6) + 1;
    setDado(nuevoValor);
    
    onLanzar(); 
  };

  const obtenerMensaje = (valor) => {
    if (valor === 1) return "Mala suerte, sacaste 1";
    if (valor >= 2 && valor <= 5) return "Buen tiro!";
    if (valor === 6) return "¡FELICIDADES! ¡Sacaste el mayor! 🎉";
    return "";
  };

  return (
    <Card className="simulador-dado-card">
      <Card.Body>
        <span className="simulador-dado-etiqueta">A JUGAR</span>
        <Card.Title className="simulador-dado-titulo">Lanzá el dado</Card.Title>

        <div className="simulador-dado-resultado" aria-live="polite">
          <span className="simulador-dado-numero">{dado}</span>
          <span className="simulador-dado-emoji" aria-label={`Cara del dado ${dado}`}>
            {emojisDado[dado - 1]}
          </span>
        </div>

        <p className="simulador-dado-mensaje">
          {obtenerMensaje(dado)}
        </p>

        {(jugador.nombre || jugador.apellido || jugador.edad) && (
          <Alert variant="dark" className="simulador-dado-jugador" >
            <strong>Jugador:</strong> {jugador.nombre} {jugador.apellido}{' '}
            {jugador.edad && `(${jugador.edad} años)`}
          </Alert>
        )}

        <Button variant="primary" size="lg" onClick={lanzarDado} className="simulador-dado-boton">
          Lanzar Dado
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SimuladorDado;