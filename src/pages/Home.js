import React, { Component } from 'react';
import moment from 'moment';
import playlistService from '../services/playlist';
import Filters from '../components/Filters';
import Playlist from '../components/Playlist';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playlist: [],
            filters: {
                country: 'BR',
                timestamp: moment().format(),
                limit: 20,
                // offset: 0,
            }
        }

        this.handleFilter = this.handleFilter.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }

    componentDidMount() {
        // send default filters from state
        this.playlistAPI(this.state.filters);
    }

    playlistAPI(filters) {
        return playlistService(filters)
        .then(rsp => {
            if (rsp.status === 401) {
                // redirect to login
                // remove localStorage?
                localStorage.removeItem('access-token');
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
                    ...filters
                })
            }
        })
        .catch(err => console.error(err));

    }

    handleDate(key, date) {
        const filters = {
            ...this.state.filters,
            [key]: date,
        };

        this.playlistAPI(filters);
    }

    handleFilter(event) {
        const key = event.target.id;
        const value = event.target.value;
        const filters = {
            ...this.state.filters,
            [key]: value,
        };

        this.playlistAPI(filters);
    }

    render() {
        console.log('render > this.state', this.state);

        return(
            <div>
                <Filters
                    handleFilter={ this.handleFilter }
                    handleDate={ this.handleDate }
                />
                <Playlist
                    playlist={ this.state.playlist }
                />
            </div>
        );
    }
};

export default Home;
