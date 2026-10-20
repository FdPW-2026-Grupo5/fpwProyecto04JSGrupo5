import { Card, Form } from 'react-bootstrap';

import {
  validarNombreApellido,
  validarEdad
} from '../Services/validaciones.js';

function FormularioJugador({ jugador, setJugador }) {
const handleInputChange = (e) => {
  const { name, value } = e.target;

  if (name === 'nombre' || name === 'apellido') {
    if (!validarNombreApellido(value)) {
      return;
    }
  }

  if (name === 'edad') {
    // Solo controlar los caracteres durante la escritura
    if (!/^[0-9]*$/.test(value)) {
      return;
    }
    
  }

  setJugador((prev) => ({
    ...prev,
    [name]: value
  }));
  
};

  return (
    <Card className="mb-4 border-0 shadow-sm bg-transparent">
      <Card.Body>
        <Card.Title className="mb-4 fs-5 text-center">Datos del Jugador</Card.Title>
        
        <Form className="mx-auto" style={{ maxWidth: '400px' }}>
          
          <Form.Group className="mb-2 d-flex align-items-center" controlId="formNombre">
            <Form.Label className="m-0 fs-5 w-25 text-end pe-2">Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Ingresa tu nombre"
              value={jugador.nombre}
              onChange={handleInputChange}
              className="bg-transparent text-white w-75"
            />
          </Form.Group>

          <Form.Group className="mb-2 d-flex align-items-center" controlId="formApellido">
            <Form.Label className="m-0 fs-5 w-25 text-end pe-2">Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              placeholder="Ingresa tu apellido"
              value={jugador.apellido}
              onChange={handleInputChange}
              className="bg-transparent text-white w-75"
            />
          </Form.Group>

          <Form.Group className="mb-2 d-flex align-items-center" controlId="formEdad">
            <Form.Label className="m-0 fs-5 w-25 text-end pe-2">Edad</Form.Label>
            <Form.Control
              type="text"
              inputMode="numeric"
              name="edad"
              placeholder="edad de 16 a 99 años"
              value={jugador.edad}
              onChange={handleInputChange}
              minLength={2}
              maxLength={2}
              className="bg-transparent text-white w-75"
            />
          </Form.Group>

        </Form>
      </Card.Body>
    </Card>
  );
}

export default FormularioJugador;