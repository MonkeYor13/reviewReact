// contexto
import Contexto from './Contexto'
//libreria Apis
import axios from "axios"
import { useEffect, useState } from "react";

export default function DatosContexto(props) {
    const [estado, setEstado] = useState([])

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
        productos: [],
    }


    //creamos nuestra funtion asycrona ya que useEffe ya lo es y no podemos crearla directamente alli
    const listameProductos = async () => {
        const res = await axios.get(
            "https://fakerapi.it/api/v1/products?_quantity=3&_taxes=12&_categories_type=uuid"
        );
        console.log(res.data.data, 'presionado'); //esto es para ver si trae la informacion de la Api atraves del useEffect
        setEstado(res.data.data) //aqui guardamos los datos de la API para luego renderizar el ocmponenete con useState  con Map
    }
    

    return (
        <>
            <Contexto.Provider value={{
                apellido, listaInvitados, pastel, cantarCancion, productos: estado, listameProductos
            }} >
                {children}
            </Contexto.Provider>
        </>
    )
}
