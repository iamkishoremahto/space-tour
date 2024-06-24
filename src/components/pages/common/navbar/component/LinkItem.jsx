import { NavLink } from "react-router-dom"

export default function LinkItem({ number, title, link }) {
    return (
        <>


         
                <NavLink to={link}
                className={({ isActive }) =>
                `text-[25px] gap-2 relative h-full  flex items-center justify-center 
                after:content-[''] after:h-[2px] ${isActive?'after:w-full':'after:w-0'} after:bg-white after:absolute after:bottom-0 hover:after:w-full
                after:transition after:ease-in-out after:delay-100 after:duration-150`
            }
                >
                    <span className=" font-semibold">{number}</span>
                    <span>{title}</span>
                </NavLink>

           
        </>
    )
}