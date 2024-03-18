import React,{useContext} from "react";
import UserContext from "../userContext";
const Profile=function()
{
    const {user}=useContext(UserContext)
    console.log( user)
     if( !user){
        return <div>Please Login</div>
     }
     else 
     {return <div> Welcome {user.username}</div>}
    
}
export default Profile;