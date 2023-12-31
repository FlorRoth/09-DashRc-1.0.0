import React from 'react';
import { useContext, useReducer } from "react"
import AuthLayout from "../layouts/AuthLayout"
import { GeneralLayout } from "../layouts/GeneralLayout"
import { AuthContexts } from "../contexts/AuthContexts"
import { Routes,Route } from 'react-router';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';


export const AppRoutes = () => {
  const {state}  = useContext(AuthContexts);
  const isLogged = state.isLogged ? state.isLogged : false;

  
  return (
    <>

    <Routes>
      <Route path='/auth*' element={
        <PublicRoutes isLogged={isLogged}>
          <AuthLayout/>
        </PublicRoutes>
      }/>


    
      <Route path='/*' element={

        <PrivateRoutes isLogged={isLogged}>
          <GeneralLayout /> 
        </PrivateRoutes>
      }/>

    </Routes>
    </>
  )
}
