import qs from 'qs';

export default hash => {
    const token = qs.parse(hash)['#access_token'];
    return token;
}
