const endpoint = 'https://api.spotify.com/v1/browse/featured-playlists';

// Reference
// https://developer.spotify.com/documentation/web-api/reference/browse/get-list-featured-playlists/
// locale
// country
// timestamp
// limit
// offset

export default params => {
    const accessToken = localStorage.getItem('access-token');
    const options = {
        headers: { Authorization: `Bearer ${accessToken}` },
        params,
    };

    return fetch(endpoint, options);
};
