import Contexto from "./Contexto"
import { useContext, useEffect } from "react"


export default function CardContexto() {
    const { apellido, listaInvitados, pastel, cantarCancion, listameProductos, productos, imagen } = useContext(Contexto);

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
                <div key={item.id}> 
                    <p>Nombre: {item.name}</p>
                    <p>Descripcion: {item.description}</p>
                    <p>Precio: {item.price}</p>
                </div>
            ))}
            <img src={imagen} alt="" />
           
        </>
    )
}
