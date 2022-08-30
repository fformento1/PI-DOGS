const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const { conseguirTemperamentos, temperamentosSinRepetir } = require("./utils");
const { Temperament } = require("../db");

router.get("/", (req, res) => {
  Temperament.findAll().then((data) => {
    if (data.length === 0) {
      fetch("https://api.thedogapi.com/v1/breeds")
        .then((data) => data.json())
        .then((data) =>
          data.map((el) => {
            return {
              name: el.name,
              image: el.image.url,
              temperaments: el.temperament,
              weight: el.weight.metric,
              id: el.id,
            };
          })
        )
        .then((data) => conseguirTemperamentos(data))
        .then((data) => temperamentosSinRepetir(data))
        .then((data) => Temperament.bulkCreate(data))
        .then((data) => res.json(data));
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
