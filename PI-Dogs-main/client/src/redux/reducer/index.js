import {
  GET_ALL_DOGS,
  GET_DOG,
  CREATE_DOG,
  GET_TEMPERAMENTS,
  GET_DOG_BY_NAME,
} from "../actions/index";

const initialState = {
  dog: {},
  dogs: [],
  temperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_DOG:
      return {
        ...state,
        dog: action.payload,
      };

    case CREATE_DOG:
      return {
        ...state,
        dogs: [...state.dogs, action.payload],
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case GET_DOG_BY_NAME:
      return {
        ...state,
        dog: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
