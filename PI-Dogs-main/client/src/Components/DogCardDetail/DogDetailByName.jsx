import React from "react";
import { getDogByName } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import DogCard from "../DogCard/DogCard";

export const DogDetailByName = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("name");
  const dog = useSelector((state) => state.dog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogByName(name));
  }, [dog]);

  if (typeof dog.error === "string") {
    return (
      <div>
        <p>No se encontró un perro con ese nombre.</p>
      </div>
    );
  } else {
    return (
      <div>
        {dog.length > 0 ? (
          dog.map((el) => (
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
  }
};

export default DogDetailByName;
