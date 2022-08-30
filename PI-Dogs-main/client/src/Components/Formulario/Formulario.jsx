import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDog } from "../../redux/actions";
import { useState } from "react";

export const CreateDog = () => {
  const temperaments = useSelector((state) => state.temperaments);
  const [temperamento, setTemperamento] = useState([]);
  const [inputs, setInputs] = useState({});
  const [errorNombre, setErrorNombre] = useState(" ");
  const [errorAlturaMin, setErrorAlturaMin] = useState(" ");
  const [errorAlturaMax, setErrorAlturaMax] = useState(" ");
  const [errorPesoMin, setErrorPesoMin] = useState(" ");
  const [errorPesoMax, setErrorPesoMax] = useState(" ");
  const [errorAñosDeVidaMin, setErrorAñosDeVidaMin] = useState(" ");
  const [errorAñosDeVidaMax, setErrorAñosDeVidaMax] = useState(" ");

  function handleChangeTemperamento(e) {
    setTemperamento([
      ...temperamento,
      {
        name: e.target.value,
        id: e.target.selectedOptions[0].id,
      },
    ]);
  }

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
      errorAlturaMin === "" &&
      errorAlturaMax === "" &&
      errorPesoMin === "" &&
      errorPesoMax === "" &&
      inputs.name !== "" &&
      inputs["weight min"] !== "" &&
      inputs["weight max"] !== "" &&
      inputs["height min"] !== "" &&
      inputs["height max"] !== ""
    ) {
      let inputsOrdenado = {
        name: inputs.name,
        height: inputs["height min"] + " - " + inputs["height max"],
        weight: inputs["weight min"] + " - " + inputs["weight max"],
        life_span:
          inputs["life_span min"] + " - " + inputs["life_span max"] + " years.",
        image: inputs.image,
        temperament: temperamento.map((el) => el.id),
      };
      dispatch(createDog(inputsOrdenado));

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
          <label>Altura mínima: *</label>
          <input
            type="text"
            name="height min"
            value={inputs["height min"]}
            onChange={(e) => {
              handleChange(e);
              if (/^\d+$/.test(e.target.value) && e.target.value > 0) {
                setErrorAlturaMin("");
              } else {
                setErrorAlturaMin(
                  "Solo puede contener números enteros mayores a 0 centímetros."
                );
              }
            }}
          />
          <span>{errorAlturaMin}</span>
        </div>
        <div>
          <label>Altura máxima: *</label>
          <input
            type="text"
            name="height max"
            value={inputs["height max"]}
            onChange={(e) => {
              handleChange(e);
              if (
                /^\d+$/.test(e.target.value) &&
                Number(e.target.value) > Number(inputs["height min"])
              ) {
                setErrorAlturaMax("");
              } else {
                setErrorAlturaMax(
                  "Solo puede contener números enteros mayores a altura mínima."
                );
              }
            }}
          />
          <span>{errorAlturaMax}</span>
        </div>
        <div>
          <label>Peso mínimo: *</label>
          <input
            type="text"
            name="weight min"
            value={inputs["weight min"]}
            onChange={(e) => {
              handleChange(e);
              if (/^\d+$/.test(e.target.value) && e.target.value > 0) {
                setErrorPesoMin("");
              } else {
                setErrorPesoMin("Solo puede contener números enteros");
              }
            }}
          />
          <span>{errorPesoMin}</span>
        </div>
        <div>
          <label>Peso máximo: *</label>
          <input
            type="text"
            name="weight max"
            value={inputs["weight max"]}
            onChange={(e) => {
              handleChange(e);
              if (
                /^\d+$/.test(e.target.value) &&
                Number(e.target.value) > Number(inputs["weight min"])
              ) {
                setErrorPesoMax("");
              } else {
                setErrorPesoMax("Solo puede contener números enteros");
              }
            }}
          />
          <span>{errorPesoMax}</span>
        </div>
        <div>
          <label>Temperamento:</label>
          <select value={temperamento} onChange={handleChangeTemperamento}>
            {temperaments.length > 0 ? (
              temperaments.map((el) => (
                <option id={el.id} key={el.id}>
                  {el.name}
                </option>
              ))
            ) : (
              <option>Cargando...</option>
            )}
          </select>
          <div>
            {temperamento.map((el) => (
              <span
                id={el.id}
                key={el.id}
                onClick={(e) => {
                  let temperamentoFiltrado = temperamento.filter(
                    (element) => element.id !== el.id
                  );
                  setTemperamento(temperamentoFiltrado);
                }}
              >
                {el.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <label>Años de vida mínimos:</label>
          <input
            type="text"
            name="life_span min"
            value={inputs["life_span min"]}
            onChange={(e) => {
              handleChange(e);
              if (/^\d+$/.test(e.target.value) && e.target.value > 0) {
                setErrorAñosDeVidaMin("");
              } else {
                setErrorAñosDeVidaMin("Solo puede contener números enteros");
              }
            }}
          />
          <span>{errorAñosDeVidaMin}</span>
        </div>
        <div>
          <label>Años de vida máximos:</label>
          <input
            type="text"
            name="life_span max"
            value={inputs["life_span max"]}
            onChange={(e) => {
              handleChange(e);
              if (
                /^\d+$/.test(e.target.value) &&
                Number(e.target.value) > Number(inputs["life_span min"])
              ) {
                setErrorAñosDeVidaMax("");
              } else {
                setErrorAñosDeVidaMax("Solo puede contener números enteros");
              }
            }}
          />
          <span>{errorAñosDeVidaMax}</span>
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
          <input type="submit"></input>
        </div>
        <div>
          <p>Los campos marcados con un * son obligatorios.</p>
        </div>
      </form>
    </div>
  );
};

export default CreateDog;
