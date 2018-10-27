import qs from 'qs';

export default url => {
    const params = url.split('?');
    const {
        country,
        limit,
        offset,
        timestamp,
    } = qs.parse(params[1]);

    return {
        country,
        timestamp,
        offset: parseInt(offset),
        limit: parseInt(limit),
    };
};
