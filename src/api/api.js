const API_URL = 'https://randomuser.me/api/';

function request (endpoint, method = 'GET', data = null) {
  const config = {
    method,
    headers:  {
      'Content-type': 'application/json'
    }
  }

  if(method === 'POST' || method === 'PUT') {
    config.body = JSON.stringify(data);
  }

  const url = `${API_URL}${endpoint}`;
  console.log(url)
  return fetch(url, config)
    .then(response => {
      return response.json()
    })
}

function get(endpoint) {
  return request(endpoint);
}

function post(endpoint, data) {
  return request(endpoint, 'POST', data);
}

function put(endpoint, data) {
  return request(endpoint, 'PUT', data);
}

function _delete(endpoint) {
  return request(endpoint, 'DELETE');
}

export default {
  get,
  post,
  put,
  delete: _delete
};