import axios from 'axios';
import querystring from 'query-string'
import { REACT_APP_DSLAB_API_ENDPOINT } from '../common/globals'

// consts
const DEBUG = true;
const baseURL = REACT_APP_DSLAB_API_ENDPOINT; //REACT_APP_DSLAB_API_ENDPOINT

const instance = axios.create({
    baseURL: baseURL,
    timeout: 5000 * 60,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    validateStatus: function (status) {
        return true; // default
      },
})

const logger = (data, url) => {
    DEBUG && console.log(url, `\n\t status: ${data.status}`, `\n\t payload: `, data.data)
    return data.data
}

export const request = (_url, _config = {}) => {
    DEBUG && console.log(_url, 'config', _config);
    let req = {
        url: _url,
        ..._config
    }
    if (!req.headers) {
        req.headers = {}
    }
    if (_config.multipart) {
        req.headers['content-type'] = 'multipart/form-data'
    }

    if (_config.query && Object.keys(_config.query).length !== 0) {
        req.url += '?' + querystring.stringify(_config.query, {arrayFormat: 'comma'})
    }

    // to do - error handling
    return instance
        .request(req)
        .then((data) => {
            return logger(data, _url);
        })
}