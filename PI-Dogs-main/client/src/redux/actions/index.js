export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOG = "GET_DOG";
export const CREATE_DOG = "CREATE_DOG";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";
export const FILTER_BY_API_DB = "FILTER_BY_API_DB";
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";

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

export const filterByApiDb = (payload) => {
  return {
    type: FILTER_BY_API_DB,
    payload,
  };
};

export const filterByTemperament = (payload) => {
  return {
    type: FILTER_BY_TEMPERAMENT,
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByWeight = (payload) => {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
};
