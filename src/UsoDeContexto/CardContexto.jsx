import { useContext, useState } from "react"
import Contexto from "./Contexto"


export default function CardContexto() {
    const { apellido, listaInvitados, pastel, cantarCancion } = useContext(Contexto);


    return (
        <>
            <p>Welcome to {apellido} Family </p>
            <h2>Invitados: {listaInvitados.join(', ')} </h2>
            <p>Pastel: Sabor {pastel.sabor} Tamaño {pastel.tamaño} Color: {pastel.color}</p>
            <button onClick={cantarCancion}>Cantar Cumple!</button>
        </>
    )
}
