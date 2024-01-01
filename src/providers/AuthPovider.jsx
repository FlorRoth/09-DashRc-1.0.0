import React, { useReducer } from 'react';
import { AuthContexts } from '../contexts/AuthContexts';
import { AuthReducer } from '../reducers/AuthReducer';
import { axiosDash } from '../config/dashAxios';


const initialValues = {
    user: {},
    isLogged: false,
    token: '',
    message: ''
    
}
export const AuthPovider = ({children}) => {

const [state, dispatch] = useReducer(AuthReducer,initialValues);

const login = async (username,pass) => {

    const {data} = await axiosDash.post('/auth/login',
    {username: username,
    password: pass});
    

    const objectStorage = {
        type: 'LOGIN',
        payload: {
        user: { 
            id: data.id, 
            username: data.username,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName
        },
        isLogged: true,
        token: data.token,
        message: "Usuario Logeado con exito"
        }
    }

    localStorage.setItem('token',JSON.stringify(objectStorage));

    dispatch(objectStorage);

}
const checkToken = async () => {
    const token = localStorage.getItem('token');
    const dataToken = JSON.parse(token);
    
    if(!token){
        dispatch({
            type: 'LOGOUT',
            payload: {
            message: "Usuario deslogeado con exito"
            }
        })
        return;
    }
    dispatch(  
        {
            type: 'LOGIN',
            payload: {
            user: { 
                id: dataToken.id, 
                username: dataToken.username,
                email: dataToken.email,
                firstName: dataToken.firstName,
                lastName: dataToken.lastName
            },
            isLogged: true,
            token: dataToken.token,
            message: "Usuario Logeado con exito"
            }
        }
 
    );

}

const logout = () => {

        dispatch({
           type: 'LOGOUT',
           payload: {
           message: "Usuario deslogeado con exito"
           }
       })
}


const recoveryPassword = (newPassword) => {

    dispatch({
       type: 'RECOVERY',
       payload: {
       newPassword: newPassword
       }
   })
}

return (
    <AuthContexts.Provider value={{state,login,logout,recoveryPassword,checkToken}}>
        {children}
    </AuthContexts.Provider>
  )
}
