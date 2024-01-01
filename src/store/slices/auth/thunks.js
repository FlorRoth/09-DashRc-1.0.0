import { axiosDash } from "../../../config/dashAxios";
import { login } from "./authSlices";



export const getLogin = (username,pass) =>{
   

    return async (dispatch, getState) => {
    
        const {data} = await axiosDash.post('/auth/login',
        {username: username,
        password: pass});
        

        const objectStorage = {
            user: { 
                id: data.id, 
                username: data.username,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName
            },
            token: data.token,
        }

        localStorage.setItem('token',JSON.stringify(objectStorage));

        dispatch(login(objectStorage));

    }
}