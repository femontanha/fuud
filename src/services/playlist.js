import { SPOTIFY_FEATURED_PLAYLIST } from '../constants';

// Reference
// https://developer.spotify.com/documentation/web-api/reference/browse/get-list-featured-playlists/

export default params => {
    const {
        country,
        limit,
        timestamp,
    } = params;

    const urlParams = `country=${ country }&limit=${ limit }&timestamp=${ timestamp }`
    const accessToken = localStorage.getItem('access-token');
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    };

    return fetch(`${ SPOTIFY_FEATURED_PLAYLIST }?${ urlParams }`, options);
};
