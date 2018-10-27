import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FilterByCountry extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        }
    }

    handleChange(event) {
        const key = event.target.id;
        const value = event.target.value;

        this.setState({ value })
        this.props.onChange(key, value);
    }

    render() {
        const {
            id,
            name,
            values,
        } = this.props;

        return (
            <fieldset className="filters-form__fieldset">
                <label htmlFor={ id } className="filters-form__label">
                    Escolha o <span>{ name }</span>
                </label>
                <select
                    id={ id }
                    name={ name }
                    onChange={ this.handleChange.bind(this) }
                    value={ this.state.value }
                    className="filters-form__input"
                >
                    { values.map(locale => <option key={ locale.value } value={ locale.value }>{ locale.name }</option>) }
                </select>
            </fieldset>
        );
    }
};

FilterByCountry.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FilterByCountry;
