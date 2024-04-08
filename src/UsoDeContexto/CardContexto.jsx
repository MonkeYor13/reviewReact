import Contexto from "./Contexto"
import { useContext, useEffect } from "react"


export default function CardContexto() {
    const { apellido, listaInvitados, pastel, cantarCancion, listameProductos, productos } = useContext(Contexto);

    useEffect(() => {
        listameProductos();
    }, []);


    return (
        <>
            <p>Welcome to {apellido} Family </p>
            <h2>Invitados: {listaInvitados.join(', ')} </h2>
            <p>Pastel: Sabor {pastel.sabor} Tamaño {pastel.tamaño} Color: {pastel.color}</p>
            <button onClick={cantarCancion}>Cantar Cumple!</button>
            <button onClick={listameProductos} >Mostrar Productos</button>
            {productos.map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <p>name: {item.name}</p>
            ))}
        </>
    )
}
