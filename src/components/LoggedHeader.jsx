import React from "react";
import { NavLink } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import profile from "../profile.png"
import { useState } from "react";
export default function LoggedHeader(){
    const[isLogged, setIsLogged]=useState(false)
    return(
        <header className='flex flex-wrap items-center justify-between p-5 bg-slate-900 text-white text-2xl'>
        <NavLink to='/' className='car-head'>#YourFourms</NavLink>
        <hr/>
        <div className="flex space-x-8">
        <hr/>
        <NavLink to="/user" className={({isActive})=>isActive?" underline text-yellow-300": null}><div className="flex "><img className='h-8 w-11 mx-2' src={profile}/>{JSON.parse(localStorage.getItem('name'))}</div></NavLink>

        </div>
        </header>
    )
}