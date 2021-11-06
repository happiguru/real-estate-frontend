import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Apartment = ({
    id,
    apartmentId,
    apartment_name,
    city,
    address,
    description_short,
    description_long,
    price,
}) => (
    <div className="col-xl-4 col-lg-3 col-md-6" key={id}>
        <Link to={`/${id}`}>
            <div>
                <h3>{apartment_name}</h3>
                <h3>{apartmentId}</h3>
                <h3>{city}</h3>
                <h3>{address}</h3>
                <h3>{description_short}</h3>
                <h3>{description_long}</h3>
                <h3>{price}</h3>
            </div>
        </Link>
    </div>
);

Apartment.propTypes = {
    id: PropTypes.number.isRequired,
    apartmentId: PropTypes.string.isRequired,
    apartment_name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description_short: PropTypes.string.isRequired,
    description_long: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}

export default Apartment;
