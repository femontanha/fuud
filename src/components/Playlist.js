import React from 'react';
import '../styles/playlist.scss';

class Playlist extends React.Component {
    render() {
        return (
            <div className="playlist-grid">
                {
                    this.props.playlist.map(list => {
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
