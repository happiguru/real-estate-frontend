import {
    LOAD_APARTMENTS,
    APARTMENT_DETAILS,
    FILTERED_APARTMENTS
} from "../actionTypes";

export const loadApartments = (apartments = []) => ({
    type: LOAD_APARTMENTS,
    apartments,
});

export const getApartmentDetails = (id = '', update = {}) => ({
    type: APARTMENT_DETAILS,
    id,
    update,
});

export const setFilter = (apartment_name = '') => ({
    type: FILTERED_APARTMENTS,
    apartment_name,
});
