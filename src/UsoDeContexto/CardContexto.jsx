import Contexto from "./Contexto"
import { useContext, useEffect } from "react"


export default function CardContexto() {
    const { apellido, listaInvitados, pastel, cantarCancion, listameProductos, productos, obtenerImagenes, imagen} = useContext(Contexto);

    useEffect(() => {
        listameProductos();
        obtenerImagenes()
    }, []);


    return (
        <>
            <p>Welcome to {apellido} Family </p>
            <h2>Invitados: {listaInvitados.join(', ')} </h2>
            <p>Pastel: Sabor {pastel.sabor} Tamaño {pastel.tamaño} Color: {pastel.color}</p>
            <button onClick={cantarCancion}>Cantar Cumple!</button>
            <button onClick={listameProductos} >Mostrar Productos</button>

            {productos.map(item=>(
                <p key={item.id}>Nombre:{item.name}</p>
            ))}

            {imagen.map(imagen=>(
                <img key={imagen.id} src={imagen.download_url} alt={imagen.author}  style={{ width: '200px', height: '200px', margin: '10px' }} />
            ))}
        </>
    )
}
