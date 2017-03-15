import { hideLoading } from 'react-redux-loading-bar';

export default function fetchWrapper(url = '', options = {}) {
  return fetch(url, options)
    .then(status)
    .then(json)
    .then(success => {
      return success;
    }).catch(errorHandler);
}


function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}

function json(response) {
    if (response.status !== 204) {
        return response.json();
    }
    else{
        return {}
    }
}
function errorHandler(error) {
    if(error.status === 400) {
        return error.json().then(e => {
            throw {fields: e, status: error.status};
        });
    }
}

export function errorActionHandler(dispatch) {
    return error => {
        dispatch(hideLoading());
        throw error;
    };
}