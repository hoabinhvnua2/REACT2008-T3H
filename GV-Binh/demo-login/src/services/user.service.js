
import {history} from '../helper/history';
export const userService = {
  register,
  login,
  loginFB,
  apiAuthenticate,
  logout
};

function register(user) {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`/users/register`, request).then((response) => {
    response.text().then((text) => {
      console.log(text);
    });
  });
}

function login(user) {
  console.log('đã vào đây');
  console.log('user', user);
  const { userName, password } = user;
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userName, password }),
  };

  return fetch(`/users/authenticate`, request)
    .then((response) => {
      return response.text().then((text) => {
        const data = text && JSON.parse(text);
        return data;
      });
    })
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
}

async function loginFB() {
    console.log('xx');
    const { authResponse } = await new Promise(window.FB.login);
    console.log('xx');
    if (!authResponse) return;

    await apiAuthenticate(authResponse.accessToken);

    const { from } = history.location.state || { from: { pathname: "/" } };
    history.push(from);
}


async function apiAuthenticate(accessToken) {
    const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken }),
      };
    
      return fetch(`/users/authenticateFace`, request)
        .then((response) => {
          return response.text().then((text) => {
            const data = text && JSON.parse(text);
            return data;
          });
        })
        .then((user) => {
            console.log(user);
            // user.userName = user.name;

            // console.log(user);
          localStorage.setItem("user", JSON.stringify(user));
    
          return user;
        });
}

function logout() {
    window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
    localStorage.removeItem('user');
    history.push('/login')
}