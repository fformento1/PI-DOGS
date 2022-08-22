const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const { conseguirTemperamentos, temperamentosSinRepetir } = require("./utils");
const { Temperament } = require("../db");

router.get("/", async (req, res) => {
  let dbTemperament = await Temperament.findAll();
  if (dbTemperament.length === 0) {
    console.log("Estoy buscando en la api");
    fetch("http://localhost:3001/dogs")
      .then((data) => data.json())
      .then((data) => conseguirTemperamentos(data))
      .then((data) => temperamentosSinRepetir(data))
      .then((data) => Temperament.bulkCreate(data))
      .then((data) => res.json(data));
  } else {
    res.json(dbTemperament);
  }
});

/* router.get("/", (req, res) => {
  Temperament.findAll()
  .then((data) => {
    if (data.length === 0) {
      console.log("Estoy buscando en la api");
      fetch("http://localhost:3001/dogs")
        .then((data) => data.json())
        .then((data) => conseguirTemperamentos(data))
        .then((data) => temperamentosSinRepetir(data))
        .then((data) => Temperament.bulkCreate(data))
        .then((data) => res.json(data));
    } else {
      res.json(data);
    }
  });
});
 */

module.exports = router;
