import { combineReducers } from "redux";
import apartmentsReducer from "./apartments";
import userReducer from "./userReducer";
import filterReducer from "./FilterReducer";

const allReducers = combineReducers({
    apartments: apartmentsReducer,
    filter: filterReducer,
    user: userReducer,
});

export default allReducers;
