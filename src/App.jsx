import { useState } from 'react';
import { Container } from 'react-bootstrap';
import FormularioJugador from './components/FormularioJugador/FormularioJugador';
import SimuladorDado from './components/SimuladorDado/SimuladorDado';

function App() {
  
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    apellido: '',
    edad: ''
  });

  const [jugadorConfirmado, setJugadorConfirmado] = useState({
    nombre: '',
    apellido: '',
    edad: ''
  });

  const confirmarJugada = () => {
    setJugadorConfirmado({ ...datosFormulario });
  };

  return (
    <Container className="py-5" style={{ maxWidth: '600px' }}>
      <h1 className="text-center mb-4 fw-normal">Simulador de Dado</h1>
      
      <FormularioJugador 
        jugador={datosFormulario} 
        setJugador={setDatosFormulario} 
      />
      
      <SimuladorDado 
        jugador={jugadorConfirmado} 
        onLanzar={confirmarJugada} 
      />
    </Container>
  );
}

export default App;