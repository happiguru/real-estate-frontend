import { LOAD_APARTMENTS, APARTMENT_DETAILS } from "../actionTypes";

const apartmentsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_APARTMENTS:
            return [
                ...action.apartments,
            ];
        case APARTMENT_DETAILS:
            return state.map((obj) => (obj.id === action.id ? { ...obj, ...action.update } : obj));
        default:
            return state;
    }
};

export default apartmentsReducer;
