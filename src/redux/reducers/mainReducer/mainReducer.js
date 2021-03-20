import {ACTIVE_GENDER, ACTIVE_USER, ADD_USER, USER_DELETE} from "../../types/types";

const initialState = {
  users: [
    {
      id: 1,
      fullName: "Иванов Иван Иванович",
      email: "ivanov.ivan@mail.ru",
      sex: "male",
    },
    {
      id: 2,
      fullName: "Яна Яновна Янова",
      email: "yanova.yana@mail.ru",
      sex: "female",
    },
    {
      id: 3,
      fullName: "Никсель Пиксель",
      email: "nixel.pixel@mail.ru",
      sex: "other",
    },
  ],
  activeGender: null,
  activeUser: null
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, {id: state.users.length + 1, ...action.payload}],
      };
    case ACTIVE_GENDER:
      return {
        ...state,
        activeGender: action.payload,
      };
    case ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload,
      };
    case USER_DELETE:
      return {
        ...state,
        users: action.payload
      }

    default:
      return state;
  }
};
