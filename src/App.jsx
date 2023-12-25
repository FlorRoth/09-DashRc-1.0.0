import { useContext, useReducer } from "react"
import AuthLayout from "./layouts/AuthLayout"
import LoginPage from "./layouts/AuthLayout"
import { GeneralLayout } from "./layouts/GeneralLayout"
import { AuthReducer } from "./reducers/AuthReducer"
import { AuthContexts } from "./contexts/AuthContexts"



function App() {

  const {state }  = useContext(AuthContexts);



  return (
    <>
    {!state?.isLogged && (
      <AuthLayout /> 
    )}

    {state?.isLogged && (
        <GeneralLayout /> 
    )}
    </>
  )
}

export default App
