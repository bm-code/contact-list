import Agenda from "./components/Agenda";
import Formulario from "./components/Formulario";
import { useState } from "react";

function App() {

  const contactos = [
    { nombre: 'Beni', apellidos: 'Morales Silva', direccion: 'Avenida de la Ermita', ciudad: 'Sevilla', codigoPostal: 41808, telefono: 678678678 },
    { nombre: 'Pepe', apellidos: 'Garrido Gutierrez', direccion: 'Calle de pepe', ciudad: 'Cádiz', codigoPostal: 42808, telefono: 654654654 },
    { nombre: 'María', apellidos: 'López García', direccion: 'Calle de María', ciudad: 'Málaga', codigoPostal: 29006, telefono: 612612612 }
  ];

  const [contactosActual, setContactos] = useState(contactos);

  return (
    <div className="container py-5">
      <div className="row">
        <Agenda contactos={contactosActual} setContactos={setContactos} />
        <Formulario setContactos={setContactos} />
      </div>
    </div>
  );
}

export default App;