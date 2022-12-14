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

    case types.deleteAppoint:
      const cita = state.citasPending.appointmentsNoFinish.filter(
        (item) => item.id != payload
      );
      return {
        ...state,
        citasPending: {
          appointmentsNoFinish: cita,
        },
      };

    case types.confirmAppoint:
      const citaDelete = state.citasPending.appointmentsNoFinish.filter(
        (item) => item.id != payload
      );
      return {
        ...state,
        citasPending: {
          appointmentsNoFinish: citaDelete,
        },
      };

    case types.citasClientPending:
      return {
        ...state,
        citasClientPending: payload,
      };

    case types.getUserByEmail:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
