import React from 'react';
import PropTypes from 'prop-types';
import Apartment from './Apartment';

const ApartmentsList = ({ apartmentData, filterData }) => {
    const renderApartments = (apartments) => {
        const f = apartments.map((apartment) => (
            <Apartment
              key={apartment.id}
              apartment={apartment}
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
                <div className="bradcam_text text-center">
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
