import {ACTIVE_GENDER, ACTIVE_USER, ADD_USER, USER_DELETE, USER_EDIT} from "../types/types";

export const addUserHandler = (data) => {
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

export const activeUserHandler = (id) => {
    return {
        type: ACTIVE_USER,
        payload: id
    }
}

export const userDelete = (data, id) => {
    return {
        type: USER_DELETE,
        payload: data.filter(n => n.id !== id)
    }
}

export const userEdit = (users, user) => {
    users[user.id - 1] = user
    return {
      type: USER_EDIT,
    };
}
