/** Custom middleware to store authentication inside cookies */
const authMiddleware = (store) => (next) => (action) => {
    // if login, store it
    if (action.type === 'auth/login/fulfilled') {
        // save the local user
        localStorage.setItem('user', JSON.stringify(action.payload));
    }
    if (action.type === 'auth/logout') {
        // remove the local user
        localStorage.removeItem('user');
    }

    // next action
    next(action);
}

export const customMiddleware = (store) => (next) => (action) => {
    console.log(action.type);
    next(action);
}

export default authMiddleware;