import { Card, Form } from 'react-bootstrap';

function FormularioJugador({ jugador, setJugador }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
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
              type="number"
              name="edad"
              placeholder="Ingresa tu edad"
              value={jugador.edad}
              onChange={handleInputChange}
              className="bg-transparent text-white w-75"
            />
          </Form.Group>

        </Form>
      </Card.Body>
    </Card>
  );
}

export default FormularioJugador;