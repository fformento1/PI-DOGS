import React from 'react'
import {Link} from 'react-router-dom'
import s from './DogCard.module.css'

export const DogCard = (props) => {
    return <Link to = {`/detail/${props.id}`}>
        <div className={s.div}>
        <img src = {props.image} alt = "Imagen del perro." className={s.img} />
        <p>Nombre: {props.name} </p>
        <p>Temperamento: {props.temperament} </p>
        <p>Peso: {props.weight} </p>
    </div>
    </Link>
}

export default DogCard