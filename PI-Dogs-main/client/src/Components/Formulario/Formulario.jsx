import React from "react";
import { useDispatch } from "react-redux";
import { createDog } from "../../redux/actions";
import { useState } from "react";

export const CreateDog = () => {
  const [inputs, setInputs] = useState({});
  const [errorNombre, setErrorNombre] = useState("");
  const [errorAltura, setErrorAltura] = useState("");
  const [errorPeso, setErrorPeso] = useState("");
  const [errorAñosDeVida, setErrorAñosDeVida] = useState("");

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (
      errorNombre === "" &&
      errorAltura === "" &&
      errorPeso === "" &&
      inputs.name !== "" &&
      inputs.weight !== "" &&
      inputs.height !== ""
    ) {
      dispatch(createDog(inputs));
      alert("¡Felicitaciones! Tu perro fue creado correctamente.");
    } else {
      alert("Completar todos los campos requeridos con los datos apropiados.");
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre: *</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={(e) => {
              handleChange(e);
              if (/^[A-Za-z\s]+$/g.test(e.target.value.trim())) {
                setErrorNombre("");
              } else {
                setErrorNombre("Solo puede contener letras.");
              }
            }}
          />
          <span>{errorNombre}</span>
        </div>
        <div>
          <label>Altura: *</label>
          <input
            type="text"
            name="height"
            value={inputs.height}
            onChange={(e) => {
              handleChange(e);
              if (/^\d+$/.test(e.target.value)) {
                setErrorAltura("");
              } else {
                setErrorAltura("Solo puede contener números enteros");
              }
            }}
          />
          <span>{errorAltura}</span>
        </div>
        <div>
          <label>Peso: *</label>
          <input
            type="text"
            name="weight"
            value={inputs.weight}
            onChange={(e) => {
              handleChange(e);
              if (/^\d+$/.test(e.target.value)) {
                setErrorPeso("");
              } else {
                setErrorPeso("Solo puede contener números enteros");
              }
            }}
          />
          <span>{errorPeso}</span>
        </div>
        <div>
          <label>Temperamento:</label>
          <input
            type="text"
            name="temperament"
            value={inputs.temperament}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Años de vida:</label>
          <input
            type="text"
            name="life_span"
            value={inputs.life_span}
            onChange={(e) => {
              handleChange(e);
              if (/^\d+$/.test(e.target.value)) {
                setErrorAñosDeVida("");
              } else {
                setErrorAñosDeVida("Solo puede contener números enteros");
              }
            }}
          />
          <span>{errorAñosDeVida}</span>
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="url"
            name="image"
            value={inputs.image}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <button type="submit">Create Dog</button>
        </div>
        <div>
          <p>Los campos marcados con un * son obligatorios.</p>
        </div>
      </form>
    </div>
  );
};

export default CreateDog;
