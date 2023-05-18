import { GoogleLogout } from "react-google-login";
import React from 'react'

const GoogleLogout = () => {

const clientId = "165428537567-6riht3rvf7u0b3rennij863hfr6g674g.apps.googleusercontent.com"
const onSuccess = () =>{
    console.log("Log out succcessfull!")
}  
return (
    <div>
        <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
        />
    </div>
  )
}

export default GoogleLogout


