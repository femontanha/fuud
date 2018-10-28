import React, { PureComponent } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { ToastContainer, toast } from "react-toastify";
import playlistService from '../services/playlist';
import parsePlayListUrl from '../lib/parsePlaylistUrl';
import escapeRegExp from '../lib/escapeRegExp';
import SpotifyTimer from '../components/SpotifyTimer';
import FiltersButton from '../components/FiltersButton';
import Filters from '../components/Filters';
import Playlist from '../components/Playlist';
import Pagination from '../components/Pagination';
import { REFRESH_INTERVAL } from '../constants';
import '../styles/home.scss';

class Home extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            playlist: [],
            filteredPlaylists: null,
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
            },
            refreshRef: null,
            isFiltersLoaded: false,
            isPlaylistsLoaded: false,
        }

        this.initRefreshPlaylists = this.initRefreshPlaylists.bind(this);
    }

    componentDidMount() {
        this.playlistAPI(this.state.filters);
        this.initRefreshPlaylists();
    }

    componentWillUnmount() {
        clearInterval(this.state.refreshRef);
      }

    initRefreshPlaylists() {
        const refreshRef = setInterval(() => {
            this.playlistAPI(this.state.filters);
        }, REFRESH_INTERVAL);

        this.setState({ refreshRef });
    }

    playlistAPI(filters) {
        this.setState({ isPlaylistsLoaded: false });

        return playlistService(filters)
        .then(rsp => {
            if (rsp.status === 401) {
                localStorage.removeItem('access-token');
                this.props.history.push(`${process.env.PUBLIC_URL}/`);
                return;
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
                    filteredPlaylists: null,
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

            this.setState({ isPlaylistsLoaded: true });
        })
        .catch(err => console.error(err));

    }

    handleLoadingFilters(isLoaded) {
        this.setState({
            isFiltersLoaded: isLoaded,
        });
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

    handleFilterByName = (value) => {
        if (value === '') {
            this.setState({ filteredPlaylists: null });
            return;
        }

        const { playlist } = this.state;
        const filteredPlaylists = playlist
            .filter((item) => item.name.toLowerCase().search(escapeRegExp(value).toLowerCase()) !== -1);

        this.setState({ filteredPlaylists });
    }

    render() {
        const {
            playlist,
            filters,
            message,
            pagination,
            showFilters,
            filteredPlaylists,
            isFiltersLoaded,
            isPlaylistsLoaded,
        } = this.state;

        const homeFiltersCSS = classNames(
            'app-home__filters',
            { 'is-loaded': isFiltersLoaded }
        );

        const homePlaylistsCSS = classNames(
            'app-home__playlist',
            { 'is-loaded': isPlaylistsLoaded }
        );

        return(
            <div className="app-home">
                <SpotifyTimer />
                <ToastContainer autoClose={3000} />
                {
                    showFilters &&
                    <section className={ homeFiltersCSS }>
                        <Filters
                            handleFilter={ this.handleFilter.bind(this) }
                            handleFilterByName={ this.handleFilterByName.bind(this) }
                            filtersValues={ filters }
                            loaded={ this.handleLoadingFilters.bind(this) }
                        />
                    </section>
                }
                <section className="app-home__filters-btn">
                    <FiltersButton
                        onClick={ this.handleFiltersButton.bind(this) }
                        show={ showFilters }
                    />
                </section>
                <section className={ homePlaylistsCSS }>
                    <h1 className="app-home__playlist-name">
                        { message }
                    </h1>
                    <Playlist
                        playlist={ filteredPlaylists ? filteredPlaylists : playlist }
                    />
                    {
                        !filteredPlaylists &&
                        <Pagination
                            { ...pagination }
                            onClick={ this.handlePagination.bind(this) }
                        />
                    }
                </section>
            </div>
        );
    }
};

export default Home;
