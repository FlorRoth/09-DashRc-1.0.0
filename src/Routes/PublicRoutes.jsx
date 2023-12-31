import React from 'react'
import { Navigate } from 'react-router'

export const PublicRoutes = ({children,isLogged}) => {
  
  return (!isLogged)
  ? children
  : <Navigate to='/products'/>
}
