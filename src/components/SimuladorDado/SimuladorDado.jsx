import { useState } from 'react';
import { Card, Button, Alert } from 
'react-bootstrap';

function SimuladorDado({ jugador, onLanzar }) {
  const [dado, setDado] = useState(1);
  const emojisDado = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

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

  const tieneDatosJugador = jugador.nombre || jugador.apellido || jugador.edad;

  return (
    <Card className="text-center border-0 shadow-sm p-3 bg-transparent">
      <Card.Body>
        <div style={{ fontSize: '6rem', fontWeight: '300', lineHeight: '1' }} className="text-white">
          {dado}
        </div>

        <p className="fs-5 mb-1 text-white d-flex align-items-center justify-content-center gap-2">
          Te tocó: 
          <span style={{ fontSize: '2.5rem', lineHeight: '0', position: 'relative', top: '4px' }}>
            {emojisDado[dado - 1]}
          </span>
        </p>

        <p className="fw-semibold text-secondary mb-3">
          {obtenerMensaje(dado)}
        </p>

        {tieneDatosJugador && (
          <Alert variant="dark" className="py-2 fs-6 mb-4 text-start mx-auto" style={{ maxWidth: '400px' }}>
            <strong>Jugador:</strong> {jugador.nombre} {jugador.apellido}{' '}
            {jugador.edad && `(${jugador.edad} años)`}
          </Alert>
        )}

        <Button variant="secondary" size="lg" onClick={lanzarDado} className="px-4 py-2 mt-2">
          Lanzar Dado
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SimuladorDado;