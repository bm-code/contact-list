import Agenda from "./components/Agenda";
import Formulario from "./components/Formulario";
import { useState } from "react";

function App() {

  const contactos = [
    { nombre: 'Beni', apellidos: 'Morales', direccion: 'Dirección de Beni', ciudad: 'Sevilla', codigoPostal: 40400, telefono: 678678678 },
    { nombre: 'Pepe', apellidos: 'García', direccion: 'Dirección de Pepe', ciudad: 'Cádiz', codigoPostal: 40400, telefono: 654654654 },
    { nombre: 'María', apellidos: 'López', direccion: 'Dirección de María', ciudad: 'Málaga', codigoPostal: 40400, telefono: 612612612 }
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