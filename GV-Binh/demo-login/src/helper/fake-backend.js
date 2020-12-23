import axios from 'axios';
// array in local storage for registered users
let users = JSON.parse(localStorage.getItem("users")) || [];

export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    const { method, headers } = opts;
    const body = opts.body && JSON.parse(opts.body);

    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith("/users/authenticate") && method === "POST":
            return authenticate();
          case url.endsWith("/users/authenticateFace") && method === "POST":
            return authenticateFace();
          case url.endsWith("/users/register") && method === "POST":
            return register();
          case url.endsWith("/users") && method === "GET":
            return getUsers();
          case url.match(/\/users\/\d+$/) && method === "DELETE":
            return deleteUser();
          default:
            // pass through any requests not handled above
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      }

      // route functions

      function authenticate() {
        const { userName, password } = body;
        const user = users.find(
          (x) => x.userName === userName && x.password === password
        );
        if (!user) return error("Username or password is incorrect");
        return ok({
          id: user.id,
          userName: user.userName,
          firstName: user.firstName,
          lastName: user.lastName,
          token: "fake-jwt-token",
        });
      }

      function authenticateFace() {
        const { accessToken } = body;
        axios
          .get(`https://graph.facebook.com/v8.0/me?access_token=${accessToken}`)
          .then((response) => {
            const { data } = response;
            if (data.error) return unauthorized(data.error.message);

            let user = users.find((x) => x.facebookId === data.id);
            if (!user) {
             
              // create new account if first time logging in
              user = {
                id: newAccountId(),
                facebookId: data.id,
                userName: data.name,
                extraInfo: `This is some extra info about ${data.name} that is saved in the API`,
              };
              users.push(user);
              localStorage.setItem("users", JSON.stringify(users));
            }

            return ok({
              ...user,
              token: generateJwtToken(user),
            });
          });
      }

          
      function generateJwtToken(account) {
        // create token that expires in 15 minutes
        const tokenPayload = { 
            exp: Math.round(new Date(Date.now() + 15*60*1000).getTime() / 1000),
            id: account.id
        }
        return `fake-jwt-token.${btoa(JSON.stringify(tokenPayload))}`;
    }

      function newAccountId() {
        return users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
      }

      function register() {
        const user = body;

        if (users.find((x) => x.username === user.username)) {
          return error(`Username  ${user.username} is already taken`);
        }

        // assign user id and a few other properties then save
        user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        return ok();
      }

      function getUsers() {
        if (!isLoggedIn()) return unauthorized();

        return ok(users);
      }

      function deleteUser() {
        if (!isLoggedIn()) return unauthorized();

        users = users.filter((x) => x.id !== idFromUrl());
        localStorage.setItem("users", JSON.stringify(users));
        return ok();
      }

      // helper functions

      function ok(body) {
        resolve({
          ok: true,
          text: () => Promise.resolve(JSON.stringify(body)),
        });
      }

      function unauthorized() {
        resolve({
          status: 401,
          text: () =>
            Promise.resolve(JSON.stringify({ message: "Unauthorized" })),
        });
      }

      function error(message) {
        resolve({
          status: 400,
          text: () => Promise.resolve(JSON.stringify({ message })),
        });
      }

      function isLoggedIn() {
        return headers["Authorization"] === "Bearer fake-jwt-token";
      }

      function idFromUrl() {
        const urlParts = url.split("/");
        return parseInt(urlParts[urlParts.length - 1]);
      }
    });
  };
}
