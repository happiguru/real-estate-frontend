import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Apartment.css';


const Apartment = ({
    apartment
}) => (
    <div className="col-xl-4 col-lg-3 col-md-6" key={apartment.id}>
        <Link to={`/apartments/${apartment.id}`}>
            <div className="single_recipe text-center">
                <div className="recepie_thumb">
                    <img src={apartment.apartmentimg} alt="hello" />
                </div>
                <h3>{apartment.apartment_name}</h3>
                <span>Price: {apartment.price}</span>
                <p>City: {apartment.city}</p>
                <p>Address: {apartment.address}</p>
                <p>Description: {apartment.description_short}</p>
            </div>
        </Link>
    </div>
);

export default Apartment;
