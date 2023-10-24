export const saveUser = (user) => {
    localStorage.setItem('Auth', JSON.stringify(user));
}

export const removeUser = () => {
    localStorage.removeItem('Auth');
}

export const isLoggedIn = () => {
    return localStorage.getItem('Auth') != null;
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem('Auth'));
}