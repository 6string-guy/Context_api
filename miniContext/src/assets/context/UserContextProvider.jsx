import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider=({children}  )=>{ ///it is just a simple method
  const [user, setUser]=useState(null)

    return (

        <>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
   

        </>
    )
}
export default UserContextProvider