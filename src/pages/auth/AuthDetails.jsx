import React from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react'
import auth from '../../firebase'
export default function AuthDetails() {
    const[authUser, setAuthUser]=useState(null)
    useEffect(()=>{
        const listen= onAuthStateChanged(auth, (user)=>{
        if (user){
            setAuthUser(user)

            }
        else{
            setAuthUser(null)
        }
        return ()=>
        {listen()}
        })
    },[])

    function userSignOut(){
        signOut(auth).then(()=>{
            console.log("sign out successful")
        }).catch((error)=> console.log(error))
    }



  return (
    <div>
        {authUser?<><p>{`Signed in as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></>:<p>Signed out</p>}
    </div>
  )
}
