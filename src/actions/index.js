import { LOAD_APARTMENTS, APARTMENT_DETAILS } from "../actionTypes";

export const loadApartments = (apartments = []) => ({
    type: LOAD_APARTMENTS,
    apartments,
});

export const getApartmentDetails = (id = '', update = {}) => ({
    type: APARTMENT_DETAILS,
    id,
    update,
});
