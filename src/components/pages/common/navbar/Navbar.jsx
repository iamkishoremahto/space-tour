import { Link } from "react-router-dom"
import LinkItem from "./component/LinkItem"
import { useState } from "react"

export default function Navbar() {

    const [mobMenu, setMobileMenu] = useState(false)
    const mobMenuHandler = () =>{
        setMobileMenu((state) => (!state))
        console.log(mobMenu)
    }

    return (
        <>
            <div className=" min-h-[100px] flex pl-11 relative">
                <div className=" flex justify-between -red-600 -2 min-w-full ">
                    <div className="logo  flex  items-center max-w-[200px] ">
                        <img className=" max-h-[50px]" src="/assets/shared/logo.svg" alt="logo" />
                    </div>
                    <div className="bg-gray-800 backdrop-blur-sm bg-opacity-60 pr-11 hidden sm:block  md:min-w-[90%] lg:min-w-[50%] -red-600">
                        <div className="  min-h-full flex justify-end">
                            <ul className=" flex flex-row gap-10 text-white items-center  min-h-full">
                                <LinkItem number='00' title='Home' link='/' />
                                <LinkItem number='01' title='Destination' link='/destination' />
                                <LinkItem number='02' title='Crew' link='/crew' />
                                <LinkItem number='03' title='Technology' link='/technology' />
                            </ul>
                        </div>
                    </div>
                    <div className={`md:hidden ${mobMenu?'hidden':'grid'} p-5`}>
                        <button onClick={mobMenuHandler}>
                            <img className="min-w-[35px]" src="/assets/shared/icon-hamburger.svg" alt="hamburger" />
                        </button>
                    </div>

                   
                </div>
                <div className= {`animate__animated animate__fadeInRight ${mobMenu?'block':'hidden'}  md:hidden text-white absolute min-h-screen min-w-screen -top-6 right-0 bg-gray-800 backdrop-blur-sm bg-opacity-60`}>
                    <div className="menu min-w-[250px] relative">
                        <button onClick={mobMenuHandler} className="close absolute right-10 top-[52px]">
                            <img className="w-[35px]" src="/assets/shared/icon-close.svg" alt="close" />
                        </button>
                    </div>
                    <div className="menu border h-[600px] py-10">
                        <ul className=" border justify-start mt-[100px]">
                        <LinkItem number='00' title='Home' link='/' />
                                <LinkItem number='01' title='Destination' link='/destination' />
                                <LinkItem number='02' title='Crew' link='/crew' />
                                <LinkItem number='03' title='Technology' link='/technology' />
                        </ul>
                    </div>
                </div>
            </div>
           
        </>
    )
}