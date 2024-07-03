import { Link,useParams } from 'react-router-dom'
import planetData from '/public/data.json'
import { useState } from 'react'

export default function ShowPlanet() {
    const { planet } = useParams()
    const [activeLink, setActiveLink] = useState(planet)

    const planetOrder = {
        "moon":0,
        "mars":1,
        "europa":2,
        "titan":3
    }
     function handleActiveLink(link){
        setActiveLink(link)
     }
    
    return (
        <>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-11 p-11 '>
                <div className='flex items-center justify-center'>
                    <img className=' lg:w-[600px] w-[200px] md:w-[400px] animate-spin-slow'  src={planetData.destinations[planetOrder[planet]].images.png} alt="" />
                </div>
                <div>
                    <div className="planetNav text-white grid place-items-center lg:place-items-start">
                        <ul  className='flex items-center  justify-start gap-11 sm:text-[30px] text-[20px] uppercase font-semibold'>
                            <li ><Link
                            onClick={() =>{handleActiveLink('moon')}}
                            className={`planetNavUnder ${activeLink === 'moon'?'after:w-full':'after:w-0'}`}
                            to='/destination/moon'>Moon</Link></li>
                            <li><Link 
                            onClick={() =>{handleActiveLink('mars')}}
                            className={`planetNavUnder ${activeLink === 'mars'?'after:w-full':'after:w-0'}`} to='/destination/mars'>mars</Link></li>
                            <li><Link
                            onClick={() =>{handleActiveLink('europa')}}
                            className={`planetNavUnder ${activeLink === 'europa'?'after:w-full':'after:w-0'}`} to='/destination/europa'>europa</Link></li>
                            <li><Link
                            onClick={() =>{handleActiveLink('titan')}}
                            className={`planetNavUnder ${activeLink === 'titan'?'after:w-full':'after:w-0'}`} to='/destination/titan'>titan</Link></li>
                            
                        </ul>
                    </div>

                    <div className="planetDetails text-white p-5 grid gap-11">
                        <h1 className=' text-[90px] uppercase text-center lg:text-start sm:text-[140px] font-semibold'>{planetData.destinations[planetOrder[planet]].name}</h1>
                        <p className='sm:text-[30px] text-[20px] text-center lg:text-start text-gray-400'>{planetData.destinations[planetOrder[planet]].description}</p>
                        <div className=' w-full h-[1px] bg-gray-400'></div>
                        <div className='flex items-center justify-between flex-col sm:flex-row text-center sm:text-start'>
                            <div>
                                <p className='sm:text-[30px] text-[20px] uppercase text-gray-400'>avg. distance</p>
                                <p className=' text-[30px] sm:text-[50px] uppercase'>{planetData.destinations[planetOrder[planet]].distance}</p>
                            </div>
                            <div>
                                <p className='sm:text-[30px] text-[20px] uppercase text-gray-400'>est. travel time</p>
                                <p className=' text-[30px] sm:text-[50px]  uppercase'>{planetData.destinations[planetOrder[planet]].travel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}