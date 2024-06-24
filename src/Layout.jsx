import React from "react";
import { Outlet } from "react-router-dom"
import {Navbar} from './Components'


export default function Layout() {
    return (
        <div className=" 
                        relative
                        min-w-screen
                        min-h-screen
                        font-Barlow
                         ">
            <div className="
                         absolute 
                         top-5
                         left-0
                         
                         min-w-full">
                <Navbar />
            </div>
               <Outlet />
        </div>
     
    )
}
