export const APP_NAME = 'Spotifood';
// Spotify
export const SPOTIFY_URL = 'https://www.spotify.com';
export const SPOTIFY_FEATURED_PLAYLIST = 'https://api.spotify.com/v1/browse/featured-playlists'
export const REDIRECT_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://femontanha.github.io${process.env.PUBLIC_URL}`;
export const SPOTIFY_AUTHORIZE =`https://accounts.spotify.com/authorize?client_id=4ad4e141368348058f86c56f318549f7&response_type=token&redirect_uri=${ REDIRECT_URI }`
export const REFRESH_INTERVAL = 30000;
export const COUNTDOWN_INTERVAL = REFRESH_INTERVAL / 1000;
// Filter
export const FILTERS_ENDPOINT = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';
