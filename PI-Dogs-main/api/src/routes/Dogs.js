const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const { Dog, Temperament } = require("../db");

router.get("/", (req, res) => {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((data) => data.json())
    .then((data) =>
      data.map((el) => {
        let obj = {
          name: el.name,
          image: el.image.url,
          temperaments: el.temperament,
          weight: el.weight.metric,
          id: el.id,
        };
        if (obj.temperaments) {
          let tempToArray = obj.temperaments.split(", ");
          let arrayTemp = tempToArray.map((e) => {
            return { name: e.trim() };
          });
          obj.temperaments = arrayTemp;
        } else obj.temperaments = [];
        return obj;
      })
    )
    .then((data) => {
      return Dog.findAll({ include: Temperament }).then((el) => {
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
          let obj = {
            image: data.image.url,
            name: data.name,
            temperaments: data.temperament,
            height: data.height.metric,
            weight: data.weight.metric,
            life_span: data.life_span,
          };
          if (obj.temperaments) {
            let tempToArray = obj.temperaments.split(", ");
            let arrayTemp = tempToArray.map((e) => {
              return { name: e.trim() };
            });
            obj.temperaments = arrayTemp;
          } else obj.temperaments = [];
          res.json(obj);
        } else {
          res.status(400).json({
            error: "No se encontró una raza de perro con el ID indicado",
          });
        }
      });
  } else {
    Dog.findOne({ include: Temperament, where: { id: req.params.id } })
      .then((data) => {
        if (data) {
          let nameData = data.temperaments.map((e) => e.name);
          let stringData = nameData.join(", ");
          data.temperaments = stringData;
          return res.json(data);
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
    .then((data) =>
      Dog.findOne({ include: Temperament, where: { name: req.body.name } })
    )
    .then((data) => {
      let perrito = { ...req.body };
      perrito.temperaments = data.temperaments.map((el) => el.name);
      perrito.temperaments = perrito.temperaments.join(", ");
      return perrito;
    })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({ error: err.message }));
});

module.exports = router;
