/* state: est ce que connecté ou non grace à la variable */
/* suite à l'action login isconnected devient true */
const initstate = {
    isConnected : false, 
    profil : {
        FirstName: "",
        LastName: "",
        Username: "",
        Email: "",
        Password: "",
        City: "",
        State: "",
        Zip: ""
    }
}
const userReducer = (state=initstate, action) => {
    if (action.type == "LOGIN_USER"){

        return( {
            ... state,
            isConnected: true, 
            profil:action.user
            
        })
    }
    else if(action.type == "SIGNUP_USER"){
        return( {
            ... state,
            isConnected: true, 
            profil:action.user
            
        })
    }
    else{
        return{
            ...state
        }
    }
}
export default userReducer