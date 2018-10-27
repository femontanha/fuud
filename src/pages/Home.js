import React, { PureComponent } from 'react';
import moment from 'moment';
import playlistService from '../services/playlist';
import FiltersButton from '../components/FiltersButton';
import Filters from '../components/Filters';
import Playlist from '../components/Playlist';
import '../styles/home.scss';

class Home extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            playlist: [],
            filters: {
                country: 'BR',
                timestamp: moment().format(),
                limit: 4,
                offset: 0,
            },
            showFilters: false,
        }
    }

    componentDidMount() {
        // send default filters from state
        this.playlistAPI(this.state.filters);
    }

    playlistAPI(filters) {
        return playlistService(filters)
        .then(rsp => {
            if (rsp.status === 401) {
                localStorage.removeItem('access-token');
                this.props.history.push('/login');
            }

            return rsp.json();
        })
        .then(data => {
            // update state playlist and filters
            if (data.error) {
                // TODO: Toast?
                console.error(data.error.message);
            } else {
                this.setState({
                    playlist: data.playlists.items,
                    filters: {
                        ...filters,
                    }
                });
            }
        })
        .catch(err => console.error(err));

    }

    handleFilter(key, value) {
        const filters = {
            ...this.state.filters,
            [key]: value,
        };

        this.playlistAPI(filters);
    }

    handleFiltersButton() {
        this.setState({ showFilters: !this.state.showFilters });
    }

    render() {
        const { playlist, filters } = this.state;

        return(
            <div className="app-home">
                {
                    this.state.showFilters &&
                    <div className="app-home__filters">
                        <Filters
                            handleFilter={ this.handleFilter.bind(this) }
                            filtersValues={ filters }
                        />
                    </div>
                }
                <div className="app-home__filters-btn">
                    <FiltersButton
                        onClick={ this.handleFiltersButton.bind(this) }
                        show={ this.state.showFilters }
                    />
                </div>
                <div className="app-home__playlist">
                    <Playlist
                        playlist={ playlist }
                    />
                </div>
            </div>
        );
    }
};

export default Home;
