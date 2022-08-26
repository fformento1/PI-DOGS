import React from "react";
import { useDispatch } from "react-redux"
import { createDog } from "../../redux/actions"
import { useState } from "react"


export const CreateDog = () => {
    const [inputs, setInputs] = useState({})
    function handleChange(e){
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })       
    }

    const dispatch = useDispatch()
    function handleSubmit(e){
        e.preventDefault()
        dispatch(createDog(inputs))
    }

    return <div>
        <form onSubmit={(e) => handleSubmit(e)} >
            <label>Nombre:</label>
            <input type = 'text' name = 'name' value = {inputs.name} onChange = {(e) => handleChange(e)} />
            <label>Altura:</label>
            <input type = 'text' name = 'height' value = {inputs.height} onChange = {(e) => handleChange(e)} />
            <label>Peso</label>
            <input type = 'text' name = 'weight' value = {inputs.weight} onChange = {(e) => handleChange(e)} />
            <label>Temperamento:</label>
            <input type = 'text' name = 'temperament' value = {inputs.temperament} onChange = {(e) => handleChange(e)} />
            <label>Años de vida:</label>
            <input type = 'text' name = 'life_span' value = {inputs.life_span} onChange = {(e) => handleChange(e)} />
            <label>Imagen:</label>
            <input type = 'url' name = 'image' value = {inputs.image} onChange = {(e) => handleChange(e)} />
            <button type='submit' >Create Dog</button> 
        </form>
    </div>
}

export default CreateDog