import React from 'react';
import playlistService from '../services/playlist';
import '../styles/playlist.scss';

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlist: [],
        };
    }

    componentDidMount() {
        return playlistService()
            .then(rsp => {
                if (rsp.status === 401) {
                    // redirect to login
                    // remove localStorage?
                    localStorage.removeItem('access-token');

                }
                if (rsp.status === 200) return rsp.json();
            })
            .then(data => {
                this.setState({ playlist: data.playlists.items })
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="playlist-grid">
                {
                    this.state.playlist.map(list => {
                        return (
                            <div className="playlist-item" key={ list.id }>
                                <img src={ list.images[0].url } alt={ list.name } />
                                <p>{ list.name }</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
};

export default Playlist;
