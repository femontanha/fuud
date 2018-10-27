import React, { PureComponent } from 'react';
import moment from 'moment';
import { ToastContainer, toast } from "react-toastify";
import playlistService from '../services/playlist';
import parsePlayListUrl from '../lib/parsePlaylistUrl';
import FiltersButton from '../components/FiltersButton';
import Filters from '../components/Filters';
import Playlist from '../components/Playlist';
import Pagination from '../components/Pagination';
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
            pagination: {
                limit: 0,
                next: null,
                offset: 0,
                previous: null,
                total: 0,
            }
        }
    }

    componentDidMount() {
        this.playlistAPI(this.state.filters);
    }

    playlistAPI(filters) {
        return playlistService(filters)
        .then(rsp => {
            if (rsp.status === 401) {
                localStorage.removeItem('access-token');
                this.props.history.push('/');
            }

            return rsp.json();
        })
        .then(data => {
            if (data.error) {
                toast.error(data.error.message);
            } else {
                const {
                    limit,
                    next,
                    offset,
                    previous,
                    total,
                    items,
                } = data.playlists;

                this.setState({
                    message: data.message,
                    playlist: items,
                    filters: {
                        ...filters,
                    },
                    pagination: {
                        limit,
                        next,
                        offset,
                        previous,
                        total,
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

    handlePagination(url) {
        const filters = parsePlayListUrl(url);
        this.playlistAPI(filters);
    }

    render() {
        const {
            playlist,
            filters,
            message,
            pagination,
            showFilters,
        } = this.state;

        return(
            <div className="app-home">
                <ToastContainer autoClose={3000} />
                {
                    showFilters &&
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
                        show={ showFilters }
                    />
                </section>
                <section className="app-home__playlist">
                    <h1 className="app-home__playlist-name">
                        { message }
                    </h1>
                    <Playlist
                        playlist={ playlist }
                    />
                    <Pagination
                        { ...pagination }
                        onClick={ this.handlePagination.bind(this) }
                    />
                </section>
            </div>
        );
    }
};

export default Home;
