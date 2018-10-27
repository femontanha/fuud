import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import formatDate from '../lib/formatDate';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class FilterByDate extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(),
        }
    }

    handleFormatDate(date) {
        this.setState({ startDate: date })
        this.props.onChange(this.props.id, formatDate(date));
    }

    render () {
        return (
            <fieldset className="filters-form__fieldset">
                <label htmlFor={ this.props.id } className="filters-form__label">
                    Escolha a <span>{ this.props.name }</span>
                </label>
                <DatePicker
                    selected={ this.state.startDate }
                    onChange={ this.handleFormatDate.bind(this) }
                    className="filters-form__input"
                />
            </fieldset>
        );
    }
}

FilterByDate.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    validation: PropTypes.shape({
        entityType: PropTypes.string,
        pattern: PropTypes.string,
        primitiveType: PropTypes.string.isRequired,
    }),
    onChange: PropTypes.func.isRequired,
};

export default FilterByDate;
