import { useState } from "react";

export default function Formulario({ setContactos }) {

    // const [nombre, setNombre] = useState('');
    // const [apellidos, setApellidos] = useState('');
    // const [direccion, setDireccion] = useState('');
    // const [ciudad, setCiudad] = useState('');
    // const [codigoPostal, setCodigoPostal] = useState('');
    // const [telefono, setTelefono] = useState('');
    const initialState = {
        nombre: '',
        apellidos: '',
        direccion: '',
        ciudad: '',
        codigoPostal: '',
        telefono: ''
    }
    const [form, setForm] = useState(initialState);

    function handleInput(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function registrarContacto(event) {
        event.preventDefault();
        if (form.nombre !== '' && form.apellidos !== '' && form.direccion !== '' && form.ciudad !== '' && form.codigoPostal !== '' && form.telefono !== '') {
            setContactos(contactosActual => [...contactosActual, form]);
            setForm(initialState);
        } else {
            alert('Rellena todos los datos')
        }


        // event.target.reset(); -> Si lo hacemos de esta manera, los inputs se vacían, pero los estados no. Por tanto si seguimos dándole a registrar nos sigue añadiendo contactos con los datos del último que se haya añadido 
        // setNombre('');
        // setApellidos('');
        // setDireccion('');
        // setCiudad('');
        // setCodigoPostal('');
        // setTelefono('');

    }

    return (
        <div className="col-12 col-md-4">
            <h2 className="mb-3">Nuevo contacto</h2>
            <form onSubmit={registrarContacto}>
                <input type="text" className="form-control mb-3" name='nombre' value={form.nombre} placeholder="Introduce un nombre" onChange={handleInput} />
                <input type="text" className="form-control mb-3" name='apellidos' value={form.apellidos} placeholder="Introduce los apellidos" onChange={handleInput} />
                <input type="text" className="form-control mb-3" name='direccion' value={form.direccion} placeholder="Introduce la dirección" onChange={handleInput} />
                <input type="text" className="form-control mb-3" name='ciudad' value={form.ciudad} placeholder="Introduce la provincia" onChange={handleInput} />
                <input type="number " className="form-control mb-3" name='codigoPostal' value={form.codigoPostal} placeholder="Introduce el código postal" onChange={handleInput} />
                <input type="number " className="form-control mb-3" name='telefono' value={form.telefono} placeholder="Introduce el número de teléfono" onChange={handleInput} />
                <button type="submit" className="btn btn-success">Registrar contacto</button>
            </form>
        </div>
    )
}