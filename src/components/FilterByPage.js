import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FilterByPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        }
    }

    handleChange(event) {
        const key = event.target.id;
        const value = parseInt(event.target.value);

        this.setState({ value })
        this.props.onChange(key, value);
    }

    render() {
        const {
            id,
            name,
        } = this.props;

        return (
            <fieldset>
                <p>
                    Escolha a <span>{ name }</span>
                </p>
                <input
                    id={ id }
                    type="number"
                    value={ this.state.value }
                    onChange={ this.handleChange.bind(this) }
                />
            </fieldset>
        );
    }
};

FilterByPage.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    validation: PropTypes.shape({
        primitiveType: PropTypes.string.isRequired,
    }),
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FilterByPage;
