import React, { PureComponent } from 'react';
import getFilters from '../services/filters';
import FilterByCountry from './FilterByCountry';
import FilterByDate from './FilterByDate';
import FilterByLimit from './FilterByLimit';
import FilterByPage from './FilterByPage';
import * as enumFilters from '../enum/filters';

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
            <div>
                <h1>Filters</h1>
                <form>
                    {
                        this.state.filters.map(options => {
                            switch (options.id) {
                                case enumFilters.COUNTRY:
                                    return (
                                        <FilterByCountry
                                            { ...options }
                                            key={ options.id }
                                            onChange={ this.props.handleFilter }
                                        />
                                    );
                                case enumFilters.TIMESTAMP:
                                    return (
                                        <FilterByDate
                                            { ...options }
                                            key={ options.id }
                                            onChange={ this.props.handleDate }
                                        />
                                    );
                                case enumFilters.LIMIT:
                                    return (
                                        <FilterByLimit
                                            { ...options }
                                            key={ options.id }
                                            initialValue={ 0 }
                                            onChange={ this.props.handleFilter }
                                        />
                                    );
                                case enumFilters.OFFSET:
                                    return <FilterByPage key={ options.id } { ...options } />
                                default:
                                    return null;
                            }
                        })
                    }
                </form>
            </div>
        );
    }
};

export default Filters;
