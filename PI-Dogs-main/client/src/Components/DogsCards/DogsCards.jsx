import React from "react";
import DogCard from "../DogCard/DogCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllDogs,
  getTemperaments,
  filterByApiDb,
  filterByTemperament,
  orderByName,
  orderByWeight,
} from "../../redux/actions";
import s from "./DogsCards.module.css";
import Pagination from "../Paginado/Paginado";

export const DogCards = () => {
  const dogs = useSelector((state) => state.dogs);
  const temperamentos = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, []);

  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Filtrados
  const [orden, setOrden] = useState("");

  function handleFilterByApiDb(e) {
    dispatch(filterByApiDb(e.target.value));
  }

  function handleFilterByTemperament(e) {
    dispatch(filterByTemperament(e.target.value));
  }

  function handleSortName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleSortWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div className={s.div}>
      <div>
        <select onChange={(e) => handleFilterByApiDb(e)}>
          <option>Todos</option>
          <option>Creados</option>
          <option>Existentes</option>
        </select>
        <select onChange={(e) => handleFilterByTemperament(e)}>
          <option>Temperamentos</option>
          {temperamentos.map((el) => {
            return <option>{el.name}</option>;
          })}
        </select>
        <select onChange={(e) => handleSortName(e)}>
          <option>Nombre</option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
        <select onChange={(e) => handleSortWeight(e)}>
          <option>Peso</option>
          <option>Menor peso</option>
          <option>Mayor peso</option>
        </select>
      </div>
      <div className={s.dogsContainer}>
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
      </div>
      <div>
        <Pagination
          dogsPerPage={dogsPerPage}
          totalDogs={dogs.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default DogCards;
