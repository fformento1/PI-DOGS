import React from "react";
import { Link } from "react-router-dom";
import s from "./DogCard.module.css";

export const DogCard = (props) => {
  return (
    <div>
      <Link to={`/detail/${props.id}`}>
        <div className={s.div}>
          <span>{props.name}</span>
          <img src={props.image} alt="Imagen del perro." className={s.img} />
          <div className={s.divTemperamento}>
            {props.temperament?.map((e) => (
              <span> {e.name}</span>
            ))}
          </div>
          <p>Peso: {props.weight} </p>
        </div>
      </Link>
    </div>
  );
};

export default DogCard;
