import React from 'react';
import PropTypes from 'prop-types';

const SelectCountry = ({
    id,
    name,
    values,
    onChange,
}) => {
    return (
        <fieldset>
            <p>
                Escolha o <span>{ name }</span>
            </p>
            <select id={ id } name={ name } onChange={ onChange }>
                { values.map(locale => <option key={ locale.value } value={ locale.value }>{ locale.name }</option>) }
            </select>
        </fieldset>
    );
};

SelectCountry.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
};

export default SelectCountry;
