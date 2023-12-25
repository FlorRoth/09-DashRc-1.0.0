import React, { useReducer } from 'react';
import { AuthContexts } from '../contexts/AuthContexts';
import { AuthReducer } from '../reducers/AuthReducer';


const initialValues = {
    user: {},
    isLogged: false,
    token: '',
    message: ''
}
export const AuthPovider = ({children}) => {

const [state, dispatch] = useReducer(AuthReducer,initialValues);

const login = (email) => {

    //  if(email == 'prueba@gmail.com'){

        dispatch({
            type: 'LOGIN',
            payload: {
            user: {name: 'prueba'},
            isLogged: true,
            token: 'token1233',
            message: "Usuario Logeado con exito"
            }
        })

    // }

}

// const logout = () => {

//         dispatch({
//            type: 'LOGOUT',
//            payload: {
//            message: "Usuario deslogeado con exito"
//            }
//        })
// }

return (
    <AuthContexts.Provider value={{state,login}}>
        {children}
    </AuthContexts.Provider>
  )
}
