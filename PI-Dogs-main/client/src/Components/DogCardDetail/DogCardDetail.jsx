import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDog } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const DogDetail = () => {
  let { id } = useParams();
  const dog = useSelector((state) => state.dog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDog(id));
  }, []);

  if (typeof dog.error === "string") {
    return (
      <div>
        <p>No se encontró un perro con esas características.</p>
      </div>
    );
  } else {
    return (
      <div>
        <img src={dog.image} alt="Imagen de perro." />
        <p>Nombre: {dog.name} </p>
        <p>Temperamento: {dog.temperament} </p>
        <p>Altura: {dog.height} </p>
        <p>Peso: {dog.weight} </p>
        <p>Esperanza de vida: {dog.life_span} </p>
      </div>
    );
  }
};

export default DogDetail;
