import React, { useState } from "react";
import PropTypes  from 'prop-types';
import '../styles/filterForm.css';

const FilterApartments = ({ changeFilter }) => {
    const [input, setInput] = useState('');

    const handler = (e) => {
        e.preventDefault();
        changeFilter(input);
        setInput('');

        if (input.length === 0) {
            const element = document.querySelector('.error');
            element.innerHTML = 'Sorry! No records found!';
        }
    };

    return (
        <div className="filter-form">
            <form onSubmit={handler} className="form-inline search-form">
                <input
                className="form-control mb-2 mr-sm-2 form-input"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Filter apartment by name"
                value={input}
                />
                <button className="btn btn-md btn-primary" type="submit">
                Filter
                </button>
            </form>
        </div>
    );
};

FilterApartments.propTypes  = {
    changeFilter: PropTypes.func.isRequired,
};

export default FilterApartments;
