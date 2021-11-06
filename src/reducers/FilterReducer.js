import { FILTERED_APARTMENTS } from "../actionTypes";

const defaultFilterState = {
    apartment_name: '',
};

const filterReducer = (state = defaultFilterState, action) => {
    switch (action.type) {
        case FILTERED_APARTMENTS:
            return {
                ...state,
                apartment_name: action.apartment_name
            };
        default:
            return state;
    }
};

export default filterReducer;
