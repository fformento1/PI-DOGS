export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOG = "GET_DOG";
export const CREATE_DOG = "CREATE_DOG";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";

export const getAllDogs = () => (dispatch) => {
  return fetch("http://localhost:3001/dogs")
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: GET_ALL_DOGS,
        payload: data,
      })
    );
};

export const getTemperaments = () => (dispatch) => {
  return fetch("http://localhost:3001/temperaments")
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: GET_TEMPERAMENTS,
        payload: data,
      })
    );
};

export const getDog = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/dogs/${id}`)
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: GET_DOG,
        payload: data,
      })
    );
};

export const getDogByName = (name) => (dispatch) => {
  return fetch(`http://localhost:3001/dogs?name=${name}`)
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: GET_DOG_BY_NAME,
        payload: data,
      })
    );
};

export const createDog = (dogCreated) => (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dogCreated),
  };
  return fetch("http://localhost:3001/dogs", options).then((data) =>
    data.json()
  );
};
