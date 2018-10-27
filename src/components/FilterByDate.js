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
            <fieldset>
                <p>
                    Escolha a <span>{ this.props.name }</span>
                </p>
                <DatePicker
                    selected={ this.state.startDate }
                    onChange={ this.handleFormatDate.bind(this) }
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
