import { Card, Form } from 'react-bootstrap';
import './FormularioJugador.css';

function FormularioJugador({ jugador, setJugador }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJugador((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="formulario-jugador-card">
      <Card.Body>
        <span className="formulario-jugador-etiqueta">PARTICIPANTE</span>
        <Card.Title className="formulario-jugador-titulo">Datos del jugador</Card.Title>

        <Form className="formulario-jugador-form">
          <Form.Group className="formulario-jugador-campo" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Ingresa tu nombre"
              value={jugador.nombre}
              onChange={handleInputChange}
              className="formulario-jugador-control"
            />
          </Form.Group>

          <Form.Group className="formulario-jugador-campo" controlId="formApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              placeholder="Ingresa tu apellido"
              value={jugador.apellido}
              onChange={handleInputChange}
              className="formulario-jugador-control"
            />
          </Form.Group>

          <Form.Group className="formulario-jugador-campo" controlId="formEdad">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              name="edad"
              placeholder="Ingresa tu edad"
              value={jugador.edad}
              onChange={handleInputChange}
              className="formulario-jugador-control"
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default FormularioJugador;