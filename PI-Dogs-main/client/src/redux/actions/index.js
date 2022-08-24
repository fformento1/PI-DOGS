export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOG = "GET_DOG";
export const CREATE_DOG = "CREATE_DOG";

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

export const createDog = (dogCreated) => (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dogCreated),
  };
  return fetch("http://localhost:3001/dogs", options)
    .then((data) => data.json())
    .then((data) =>
      dispatch({
        type: CREATE_DOG,
        payload: data,
      })
    );
};
