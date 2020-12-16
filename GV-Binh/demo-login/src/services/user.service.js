export const userService = {
    register,
    login
};


function register(user) {
    const request = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`/users/register`, request).then(response => {
        response.text().then(text => {
            console.log(text);
        })
    })
}

function login(user) {
    const {userName, password} = user;
    const request ={
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName, password})
    };

    return fetch(`/users/authenticate`, request).then(response => {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            return data;
        });
    }).then(user => {
        localStorage.setItem('user', JSON.stringify(user));

        return user;
    });
}

function getTasks() {
    
}