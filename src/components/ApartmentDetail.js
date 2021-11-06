import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApartmentDetails } from "../actions/index";
import ApartmentsList from "./ApartmentsList";

const ApartmentDetail = ({
    apartment
}) => (
    <div className="container mx-auto">
        <div className="row my-2">
            <div className="col-12 col-md-6">
            </div>
            <div className="col-12 col-md-6">
                <div className="recepies_info">
                    <h3>{apartment?.apartment_name}</h3>
                    <p>{apartment?.city}</p>
                    <p>{apartment?.Address}</p>
                    <p>{apartment?.price}</p>
                </div>
            </div>
            <div className="card-body">
                <h4>Descriptions: </h4>
                <p className="card-text">{apartment && apartment.description_short}</p>
                <p className="card-text">{apartment && apartment.description_long}</p>
            </div>
        </div>
    </div>
);

ApartmentsList.propTypes = {
    apartment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        apartment_name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        description_short: PropTypes.string.isRequired,
        description_long: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = (state, props) => ({
    apartment: state.apartments.find((ff) => ff.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
    getApartmentDetails: (id, update) => dispatch(getApartmentDetails(id, update))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentDetail);
