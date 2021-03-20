import {ACTIVE_GENDER, ADD_USER} from "../../types/types";

const initialState = {
  users: [
    {
      fullName: "Иванов Иван Иванович",
      email: "ivanov.ivan@mail.ru",
      sex: "male",
    },
    {
      fullName: "Яна Яновна Янова",
      email: "yanova.yana@mail.ru",
      sex: "female",
    },
    {
      fullName: "Никсель Пиксель",
      email: "nixel.pixel@mail.ru",
      sex: "other",
    },
  ],
  activeGender: null
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case ACTIVE_GENDER:
      return {
        ...state,
        activeGender: action.payload,
      };
    default:
      return state;
  }
};
