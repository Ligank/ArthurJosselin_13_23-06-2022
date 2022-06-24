const axios = require('axios').default;

//Find URl of client with his ID
let id = parseInt(window.location.pathname.replace('/Home/', ''));
const BASE_URL = "http://localhost:3000/user/" + id;

/**
 * Call API with BASE_URL/service and return promise with data needed
 * @param {String} service service as '', 'activity', 'average-sessions' or 'performance'
 * @returns {Promise}
 */

export async function api(service) {
  const url = `${BASE_URL}/${service}`;
  return axios.get(url)
  .then((profil) => {
      return profil.data.data
  })
}

