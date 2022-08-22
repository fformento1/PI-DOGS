const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const { Dog } = require("../db");

router.get("/", (req, res) => {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((data) => data.json())
    .then((data) =>
      data.map((el) => {
        return {
          name: el.name,
          image: el.image.url,
          temperament: el.temperament,
          weight: el.weight.metric,
        };
      })
    )
    .then((data) => {
      return Dog.findAll().then((el) => {
        if (el.length !== 0) {
          return data.concat(el);
        } else {
          return data;
        }
      });
    })
    .then((data) => {
      if (req.query.name) {
        let dogFiltered = data.filter((dog) =>
          dog.name.toLowerCase().includes(req.query.name.toLowerCase())
        );
        if (dogFiltered.length === 0) {
          return res
            .status(400)
            .json({ error: "No existe un perro de esa raza" });
        } else {
          return res.json(dogFiltered);
        }
      } else {
        res.json(data);
      }
    });
});

router.get("/:id", (req, res) => {
  if (req.params.id.length <= 3) {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((data) => data.json())
      .then((data) => data.find((el) => el.id === parseInt(req.params.id)))
      .then((data) => {
        if (data) {
          res.json({
            image: data.image.url,
            name: data.name,
            temperament: data.temperament,
            height: data.height.metric,
            weight: data.weight.metric,
            life_span: data.life_span,
          });
        } else {
          res.status(400).json({
            error: "No se encontró una raza de perro con el ID indicado",
          });
        }
      });
  } else {
    Dog.findOne({ where: { id: req.params.id } })
      .then((data) => {
        if (data) {
          res.json(data);
        } else {
          res.status(400).json({
            error: "No se encontró una raza de perro con el ID indicado",
          });
        }
      })
      .catch((err) =>
        res.status(400).json({
          error: "No se encontró una raza de perro con el ID indicado",
        })
      );
  }
});

router.post("/", (req, res) => {
  Dog.create(req.body)
    .then((data) => data.addTemperaments(req.body.temperament))
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({ error: err.message }));
});

module.exports = router;
