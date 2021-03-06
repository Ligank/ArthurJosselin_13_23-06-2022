export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = 'http://localhost:3001/api/v1/user/login';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json.status)
      return json;
    });
};