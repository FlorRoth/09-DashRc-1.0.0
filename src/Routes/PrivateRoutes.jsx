import React from 'react'
import { Navigate } from 'react-router'

export const PrivateRoutes = ({children, isLogged}) => {
  return (isLogged)
  ? children
  : <Navigate to='/auth/login'/>

}
