export default function fetchWrapper(url = '', options = {}) {
  return fetch(url, options)
    .then(status)
    .then(json)
    .then(success => {
      return success;
    })
}


function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}

function json(response) {
    return response.json();
}