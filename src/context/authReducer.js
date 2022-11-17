import { types } from "../types/types";

export const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.login:
      return {
        ...state,
        logged: payload,
      };

    case types.logout:
      return {
        logged: payload,
      };

    case types.citasPending:
      return {
        ...state,
        citasPending: payload,
      };

    default:
      return state;
  }
};
