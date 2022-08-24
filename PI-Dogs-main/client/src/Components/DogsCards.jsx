import React from "react";
import DogCard from "./DogCard";
import { useState } from "react";
import { useEffect } from "react";

export const DogCards = () => {
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/dogs")
        .then(data => data.json())
        .then(data => setDogs(data))
    }, [])

    return <div>
        { dogs.length>0? dogs.map(el => 
            <DogCard image = {el.image} name = {el.name} temperament = {el.temperaments} weight = {el.weight} />
            ): <h1>Cargando</h1>}
    </div>
}

export default DogCards