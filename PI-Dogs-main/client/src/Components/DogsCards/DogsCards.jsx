import React from "react";
import DogCard from "../DogCard/DogCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs, getTemperaments } from "../../redux/actions";
import s from "./DogsCards.module.css";
import Pagination from "../Paginado/Paginado";

export const DogCards = () => {
  const dogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, []);

  //Paginado
  //const [dogsPaginado, setDogsPaginado] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={s.div}>
      {dogs.length > 0 ? (
        currentDogs.map((el) => (
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
      <Pagination
        dogsPerPage={dogsPerPage}
        totalDogs={dogs.length}
        paginate={paginate}
      />
    </div>
  );
};

export default DogCards;
