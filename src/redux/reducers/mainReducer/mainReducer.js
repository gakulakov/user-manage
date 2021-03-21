import {ACTIVE_GENDER, ACTIVE_USER, ADD_USER, USER_DELETE, USER_EDIT} from "../../types/types";

const initialState = {
  users: [

  ],
  activeGender: 'all',
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
    case USER_EDIT :
      return {
        ...state,
        users: [...state.users]
      }

    default:
      return state;
  }
};
