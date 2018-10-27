import React from 'react';
import PropTypes from 'prop-types';
import '../styles/playlist.scss';

class Playlist extends React.Component {
    render() {
        return (
            <div className="playlist-grid">
                {
                    this.props.playlist.map(list => {
                        return (
                            <a
                                href={ list.external_urls.spotify }
                                className="playlist-item"
                                key={ list.id }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={ list.images[0].url } alt={ list.name } />
                                <p className="playlist-item__name">
                                    { list.name }
                                </p>
                            </a>
                        );
                    })
                }
            </div>
        );
    }
};

Playlist.propTypes = {
    playlist: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        external_urls: PropTypes.shape({
            spotify: PropTypes.string.isRequired,
        }),
        name: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.shape({
            height: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
        })),
    })),
};

export default Playlist;
