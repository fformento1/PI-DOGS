import React from "react";
import DogCard from "../DogCard/DogCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs, getTemperaments } from "../../redux/actions";
import s from "./DogsCards.module.css";

export const DogCards = () => {
  const dogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, []);

  return (
    <div className={s.div}>
      {dogs.length > 0 ? (
        dogs.map((el) => (
          <DogCard
            image={el.image}
            name={el.name}
            temperament={el.temperaments}
            weight={el.weight}
            id={el.id}
            key={el.id}
          />
        ))
      ) : (
        <h1>Cargando</h1>
      )}
    </div>
  );
};

export default DogCards;
