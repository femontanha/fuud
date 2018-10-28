import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FilterByName extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ value });
        this.props.onChange(value);
    }

    render() {
        const {
            id,
        } = this.props;

        return (
            <fieldset className="filters-form__fieldset">
                <label htmlFor={ id } className="filters-form__label">
                    Filtrar por Nome
                </label>
                <input
                    id={ id }
                    type="text"
                    className="filters-form__name-input"
                    value={ this.state.value }
                    onChange={ this.handleChange.bind(this) }
                />
            </fieldset>
        );
    }
};

FilterByName.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FilterByName;
