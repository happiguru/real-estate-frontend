import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import ApartmentsList from "../components/ApartmentsList";
import FilterApartments from "../components/FilterApartment";
import { loadApartments, setFilter } from "../actions";

const ApartmentItems = () => {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const [apartments, setApartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleFilterChange = (filterData) => {
        dispatch(setFilter(filterData));
    };


    const fetchData = async () => {
        try {
            const { data } = await axios.get(
                'http://localhost:3000/api/v1/apartments',
            );
            setApartments(data.apartments);
            dispatch(loadApartments(data.apartments));
            setLoading(false);
        } catch (error) {
            const el = document.querySelector('.error');
            el.innerHTML = 'Sorry, Please try again';
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);
    
    if (loading) {
        return <div className="loader">loading</div>;
    }
    return (
        <div className="container home">
            <FilterApartments changeFilter={handleFilterChange} />
            <div className="my-3 text-center error" />
            <ApartmentsList apartmentData={apartments} filterData={filter.apartment_name} />
        </div>
    );
};

export default ApartmentItems;
