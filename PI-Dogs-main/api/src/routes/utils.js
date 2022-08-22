//Funcion para conseguir todos los temperamentos aunque esten repetidos.
function conseguirTemperamentos(array) {
  let dogTemperament = array.map((el) => {
    if (typeof el.temperament === "string") {
      return el.temperament.split(",");
    }
  });
  dogTemperament = dogTemperament.flat();
  let temperamentos = [];
  for (let i = 0; i < dogTemperament.length; i++) {
    if (typeof dogTemperament[i] === "string") {
      temperamentos.push(dogTemperament[i].trim());
    }
  }
  return temperamentos;
}

//Función para conseguir temperamentos SIN repetir
function temperamentosSinRepetir(array) {
  let temperamentosNoRepetidos = [];
  for (let i = 0; i < array.length; i++) {
    if (temperamentosNoRepetidos.length === 0) {
      temperamentosNoRepetidos.push(array[i]);
    } else {
      let aux = false;
      for (let j = 0; j < temperamentosNoRepetidos.length; j++) {
        if (temperamentosNoRepetidos[j] === array[i]) {
          aux = true;
          break;
        }
      }
      if (aux === false) {
        temperamentosNoRepetidos.push(array[i]);
      }
    }
  }
  return temperamentosNoRepetidos.sort().map((el) => {
    return { name: el };
  });
}

module.exports = {
  conseguirTemperamentos,
  temperamentosSinRepetir,
};
