import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "../SearchBar/SearchBar.module.css";

export const SearchBar = () => {
  const [buscar, setBuscar] = useState("");

  function handleChange(e) {
    setBuscar(e.target.value);
  }

  return (
    <div className={s.div}>
      <nav>
        <ul className={s.ul}>
          <Link to={"/home/"}>
            <li className={s.li}>Home</li>
          </Link>
          <Link to="/form">
            <li className={s.li}>Create dog</li>
          </Link>
          <input
            className={s.li}
            placeholder="Buscar"
            onChange={(e) => {
              if (/^[A-Za-z\s]+$/g.test(e.target.value.trim())) {
                handleChange(e);
              }
            }}
          />
          <Link to={`/detailByName?name=${buscar}`}>
            <button>Buscar</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SearchBar;
