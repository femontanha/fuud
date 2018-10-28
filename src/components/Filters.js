import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getFilters from '../services/filters';
import FilterByName from './FilterByName';
import FilterByCountry from './FilterByCountry';
import FilterByDate from './FilterByDate';
import FilterByLimit from './FilterByLimit';
import * as enumFilters from '../enum/filters';
import '../styles/filters.scss';
import 'react-toastify/dist/ReactToastify.css';

class Filters extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            filters: [],
        }

        this.props.loaded(false);
    }

    componentDidMount() {
        return getFilters()
            .then(rsp => {
                // TODO: handle other status - 401 - 404
                if (rsp.status === 200) return rsp.json();
            })
            .then(data => {
                const filters = data.filters || [];
                this.setState({ filters })
                this.props.loaded(true);
            })
            .catch(err => console.error(err));
    }

    render() {
        // TODO: Could use https://jaredpalmer.com/formik/
        return(
            <form className="filters-form">
                <FilterByName
                    id={ 'name' }
                    onChange={ this.props.handleFilterByName }
                />
                {
                    this.state.filters.map(options => {
                        switch (options.id) {
                            case enumFilters.COUNTRY:
                                return (
                                    <FilterByCountry
                                        { ...options }
                                        key={ options.id }
                                        value={ this.props.filtersValues.country }
                                        onChange={ this.props.handleFilter }
                                    />
                                );
                            case enumFilters.TIMESTAMP:
                                return (
                                    <FilterByDate
                                        { ...options }
                                        key={ options.id }
                                        onChange={ this.props.handleFilter }
                                    />
                                );
                            case enumFilters.LIMIT:
                                return (
                                    <FilterByLimit
                                        { ...options }
                                        key={ options.id }
                                        value={ this.props.filtersValues.limit }
                                        onChange={ this.props.handleFilter }
                                    />
                                );
                            default:
                                return null;
                        }
                    })
                }
            </form>
        );
    }
};

Filters.propTypes = {
    handleFilter: PropTypes.func.isRequired,
    handleFilterByName: PropTypes.func.isRequired,
    filtersValues: PropTypes.shape({
        country: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        limit: PropTypes.number.isRequired,
        offset: PropTypes.number.isRequired
    }),
    loaded: PropTypes.func.isRequired,
};

export default Filters;
