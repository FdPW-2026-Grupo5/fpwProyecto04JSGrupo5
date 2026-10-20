import { useState } from "react";
import { Container } from "react-bootstrap";
import FormularioJugador from "./components/FormularioJugador/FormularioJugador";
import SimuladorDado from "./components/SimuladorDado/SimuladorDado";

function App() {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    apellido: "",
    edad: "",
  });

  const [jugadorConfirmado, setJugadorConfirmado] = useState({
    nombre: "",
    apellido: "",
    edad: "",
  });

  const confirmarJugada = () => {
    setJugadorConfirmado({ ...datosFormulario });
  };

  return (
    <Container fluid className="py-5">
      <h1 className="text-center mb-4 fw-normal">Simulador de Dado</h1>

      <table style={{ width: "900px", tableLayout: "fixed" }}>
        <tbody>
          <tr>
            <td style={{ width: "450px" }}>
              <FormularioJugador
                jugador={datosFormulario}
                setJugador={setDatosFormulario}
              />
            </td>
            <td style={{ width: "450px" }}>
              <SimuladorDado
                jugador={jugadorConfirmado}
                onLanzar={confirmarJugada}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default App;
