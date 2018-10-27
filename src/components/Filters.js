import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import getFilters from '../services/filters';
import FilterByCountry from './FilterByCountry';
import FilterByDate from './FilterByDate';
import FilterByLimit from './FilterByLimit';
import FilterByPage from './FilterByPage';
import * as enumFilters from '../enum/filters';
import '../styles/filters.scss';

class Filters extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            filters: [],
        }
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
            })
            .catch(err => console.error(err));
    }

    render() {
        // TODO: Could use https://jaredpalmer.com/formik/
        return(
            <Fragment>
                <form className="filters-form">
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
                                // case enumFilters.OFFSET:
                                //     return (
                                //         <FilterByPage
                                //             { ...options }
                                //             key={ options.id }
                                //             value={ this.props.filtersValues.offset }
                                //             onChange={ this.props.handleFilter }
                                //         />
                                //     );
                                default:
                                    return null;
                            }
                        })
                    }
                </form>
            </Fragment>
        );
    }
};

Filters.propTypes = {
    handleFilter: PropTypes.func.isRequired,
    filtersValues: PropTypes.shape({
        country: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        limit: PropTypes.number.isRequired,
        offset: PropTypes.number.isRequired
    }),
};

export default Filters;
