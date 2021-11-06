import React from 'react';
import PropTypes from 'prop-types';
import Apartment from './Apartment';

const ApartmentsList = ({ apartmentData, filterData }) => {
    const renderApartments = (apartments) => {
        const f = apartments.map((apartment) => (
            <Apartment
              key={apartment.id}
              id={apartment.id}
              apartmentId={apartment.apartmentId}
              apartment_name={apartment.apartment_name}
              city={apartment.city}
              address={apartment.address}
              description_short={apartment.description_short}
              description_long={apartment.description_long}
              price={apartment.price}
            />
        ));
        return f;
    };
    const filteredApartments = filterData === ''
        ? apartmentData
        : apartmentData.filter(
            (f) => f.apartment_name.toUpperCase().includes(filterData.toUpperCase()),
        );
    return (
        <>
            <div className="col-xl-12">
                <div className="text-center">
                    <h3 className="py-4">Apartment Lists</h3>
                </div>
            </div>
            <div className="row">{renderApartments(filteredApartments)}</div>
        </>
    );
};

ApartmentsList.propTypes = {
    apartmentData: PropTypes.arrayOf(PropTypes.object),
    filterData: PropTypes.string.isRequired,
};

ApartmentsList.defaultProps = {
    apartmentData: [],
};

export default ApartmentsList;
