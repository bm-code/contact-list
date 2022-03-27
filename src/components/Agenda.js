export default function Agenda({ contactos, setContactos }) {

    // const borrarContacto = function (event) {
    //     event.preventDefault();
    //     setContactos(contactosActual => contactosActual.filter(contacto => contacto.nombre + contacto.apellidos !== event.target.id))
    // }

    //Opción sin tener que darle un id al botón de eliminar

    const borrarContacto = (nombre, apellidos) => {
        return event => {
            setContactos(contactosActual => contactosActual.filter(contacto => contacto.nombre + contacto.apellidos !== event.target.id));
        }
    }

    return (
        <div className="row col-12 col-md-8 m-auto">
            <h2 className="mb-3">Lista de contactos</h2>
            {
                contactos.map(({ nombre, apellidos, direccion, ciudad, codigoPostal, telefono }, index) => {
                    return <ul key={nombre + apellidos} className="list-group col-md-6 mb-3 p-0 p-md-1 p-lg-2">
                        <li className="list-group-item active">Contacto {index + 1}</li>
                        <li className="list-group-item">{nombre} {apellidos}</li>
                        <li className="list-group-item">{direccion}, {ciudad}. {codigoPostal}</li>
                        <li className="list-group-item">{telefono}</li>
                        <button className="btn btn-warning" id={nombre + apellidos} onClick={borrarContacto()}>Eliminar</button>
                        {/* <button className="btn btn-warning" id={nombre + apellidos} onClick={borrarContacto}>Eliminar</button> */}
                    </ul>
                })
            }
        </div>
    )
}