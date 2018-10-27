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
            message: '',
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
                console.log(data)
                this.setState({
                    message: data.message,
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
        const {
            playlist,
            filters,
            message
        } = this.state;

        return(
            <div className="app-home">
                {
                    this.state.showFilters &&
                    <section className="app-home__filters">
                        <Filters
                            handleFilter={ this.handleFilter.bind(this) }
                            filtersValues={ filters }
                        />
                    </section>
                }
                <section className="app-home__filters-btn">
                    <FiltersButton
                        onClick={ this.handleFiltersButton.bind(this) }
                        show={ this.state.showFilters }
                    />
                </section>
                <section className="app-home__playlist">
                    <h1 className="app-home__playlist-name">
                        { message }
                    </h1>
                    <Playlist
                        playlist={ playlist }
                    />
                </section>
            </div>
        );
    }
};

export default Home;
