// contexto
import Contexto from './Contexto'
//libreria Apis
import axios from "axios"
import { useState, useEffect } from "react";

export default function DatosContexto(props) {
    const { children } = props;
    //variable
    let apellido = ' Perez';
    //lista
    const listaInvitados = ['Juan', 'María', 'Pedro', 'Ana'];
    //Objeto
    const pastel = {
        sabor: 'Chocolate',
        tamaño: 'Grande',
        color: 'Amarillo',
    };
    // Función para cantar la canción de cumpleaños
    const cantarCancion = () => {
        alert('Que los cumpla Feliz, Que los Cumpla...');
    };

    const estadoInicial = {
        productos: []
    }

    const listameProductos = async () => {
        const res = await axios.get(
            "https://fakerapi.it/api/v1/products?_quantity=20&_taxes=12&_categories_type=uuid"
        );
        console.log(res);
    }


    return (
        <Contexto.Provider value={{
            apellido, listaInvitados, pastel, cantarCancion, estadoInicial, listameProductos
        }} >
            {children}
        </Contexto.Provider>
    )
}
