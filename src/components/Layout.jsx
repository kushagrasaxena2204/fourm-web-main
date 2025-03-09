import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"
import LoggedHeader from "./LoggedHeader";
import { useState } from "react";

export default function Layout({isAuthenticated}){
    return(<>
    
    {isAuthenticated?<LoggedHeader/>:<Header/>}
    <main>
    <Outlet/></main>
</>)
}