const userLogin = (user) => {
    return {
        type: 'LOGIN_USER',
        user
    }
}
const userSignup = (user) => {
    return {
        type: 'SIGNUP_USER',
        user
    }
}
export {userLogin,userSignup}