import {ACTIVE_GENDER, ADD_USER} from "../types/types";

export const addUserHandler = (data) => {
    console.log(data)
    return {
      type: ADD_USER,
      payload: data
    };
}

export const activeGenderHandler = (value) => {
    return {
        type: ACTIVE_GENDER,
        payload: value
    }
}
