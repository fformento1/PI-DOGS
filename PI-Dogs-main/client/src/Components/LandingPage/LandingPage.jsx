import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div className={s.div}>
      <Link to="/home">
        <img
          src="http://todovector.com/vector/animales/terrestres/perros/hueso-de-perro/164.png"
          className={s.img}
        />
      </Link>
    </div>
  );
};

export default LandingPage;
