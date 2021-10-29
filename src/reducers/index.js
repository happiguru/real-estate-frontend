import { combineReducers } from "redux";
import apartmentsReducer from "./apartments";

const allReducers = combineReducers({
    apartments: apartmentsReducer,
});

export default allReducers;
