import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDog } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import s from "./DogCardDetail.module.css";

export const DogDetail = () => {
  let { id } = useParams();
  const dog = useSelector((state) => state.dog);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id !== dog.id) {
      dispatch(getDog(id));
    }
  }, [dog]);

  if (typeof dog.error === "string") {
    return (
      <div>
        <p>No se encontró un perro con esas características.</p>
      </div>
    );
  } else {
    return (
      <div className={s.divContainer}>
        <div className={s.div}>
          <p>{dog.name} </p>
          <img src={dog.image} alt="Imagen de perro." className={s.img} />
          <p className={s.divTemperamento}>
            Temperamento:{" "}
            {dog.temperaments?.map((e) => (
              <span> {e.name}</span>
            ))}{" "}
          </p>
          <p>Altura: {dog.height} </p>
          <p>Peso: {dog.weight} </p>
          <p>Esperanza de vida: {dog.life_span} </p>
        </div>
      </div>
    );
  }
};

export default DogDetail;
