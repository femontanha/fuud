import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FilterByLimit extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        }
    }

    handleChange(event) {
        const key = event.target.id;
        const value = parseInt(event.target.value);

        if (isNaN(value)) return;

        this.setState({ value })
        this.props.onChange(key, value);
    }

    render() {
        const {
            id,
            name,
            validation,
        } = this.props;

        return (
            <fieldset className="filters-form__fieldset">
                <label htmlFor={ id } className="filters-form__label">
                    Escolha a <span>{ name }</span>
                </label>
                <input
                    id={ id }
                    type="number"
                    min={ validation.min }
                    max={ validation.max }
                    value={ this.state.value }
                    onChange={ this.handleChange.bind(this) }
                    className="filters-form__input"
                />
            </fieldset>
        );
    }
};

FilterByLimit.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    validation: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
        primitiveType: PropTypes.string.isRequired,
    }),
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FilterByLimit;
