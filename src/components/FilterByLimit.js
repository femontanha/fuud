import React from 'react';
import PropTypes from 'prop-types';

const FilterByLimit = ({
    id,
    name,
    validation,
    initialValue,
    onChange,
}) => {
    return (
        <fieldset>
            <p>
                Escolha a <span>{ name }</span>
            </p>
            <input
                id={ id }
                type="number"
                min={ validation.min }
                max={ validation.max }
                value={ initialValue }
                onChange={ onChange }
            />
        </fieldset>
    );
};

FilterByLimit.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    validation: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
        primitiveType: PropTypes.string.isRequired,
    }),
    initialValue: PropTypes.number.isRequired,
};

export default FilterByLimit;
