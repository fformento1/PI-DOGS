import React from 'react'
import {Link} from 'react-router-dom'

export const DogCard = (props) => {
    return <div>
        <img src = {props.image} alt = "Imagen del perro." />
        <p>Nombre: {props.name} </p>
        <p>Temperamento: {props.temperament} </p>
        <p>Peso: {props.weight} </p>
    </div>
}

export default DogCard