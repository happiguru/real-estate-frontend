import { LOG_IN, SET_USER } from "../actionTypes";

export const logIn = (logIn = true) => ({
    type: LOG_IN,
    logIn,
});

export const setUser = (user = {}) => ({
    type: SET_USER,
    user,
});
