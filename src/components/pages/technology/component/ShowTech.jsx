import Data from '/public/data.json'
import { useState, useEffect } from 'react'

export default function ShowTech(){
    const [techData, setTechData] = useState(Data.technology[0])
    const [bg_url , setBgUrl] = useState(`url('${techData.images.landscape}')`)
    const [currentTech, setCurrentTech] = useState(0)
    console.log(techData)


    const updateBgImage = () => {
        if (window.innerWidth > 768) {
            setBgUrl(`url('${techData.images.portrait}')`);
        } else if (window.innerWidth >= 640) {
            setBgUrl(`url('${techData.images.landscape}')`);
        } else {
            setBgUrl(`url('${techData.images.portrait}')`);
        }
      };
    // let bg_url = 
    // console.log(techData.images_tailwind.technology_tablet_vehicle_landscape)
const handleTechnology = (value) =>{
    setTechData(Data.technology[value])
    setBgUrl(`url('${techData.images.landscape}')`)
    setCurrentTech(value)
}

    useEffect(() => {
        updateBgImage();
        window.addEventListener('resize', updateBgImage);
        return () => window.removeEventListener('resize', updateBgImage);
      }, [bg_url]);

    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-white gap-6 place-items-center">
            <div className="flex flex-col lg:flex-row items-center gap-8 order-2 lg:order-1">
                <ul className="flex flex-row lg:flex-col gap-5">
                    <li onClick = {() =>{handleTechnology(0)}} className={` border ${currentTech === 0?'bg-white border-white text-black':''} rounded-full hover:border-white border-gray-400 transition-all cursor-pointer hover:bg-white hover:text-black md:h-[80px] md:w-[80px] h-[60px] w-[60px] flex items-center justify-center md:text-[40px] text-[30px]`}>1</li>
                    <li onClick = {() =>{handleTechnology(1)}} className={` border ${currentTech === 1?'bg-white border-white text-black':''} rounded-full hover:border-white border-gray-400 transition-all cursor-pointer hover:bg-white hover:text-black md:h-[80px] md:w-[80px] h-[60px] w-[60px] flex items-center justify-center md:text-[40px] text-[30px]`}>2</li>
                    <li onClick = {() =>{handleTechnology(2)}} className={` border ${currentTech === 2?'bg-white border-white text-black':''} rounded-full hover:border-white border-gray-400 transition-all cursor-pointer hover:bg-white hover:text-black md:h-[80px] md:w-[80px] h-[60px] w-[60px] flex items-center justify-center md:text-[40px] text-[30px]`}>3</li>
                </ul>
                <div className="flex flex-col gap-5 p-5">
                    <div>
                        <h1 className=" text-center lg:text-start text-[40px] uppercase  text-gray-400">
                            the terminology...
                        </h1>
                        <h1 className=" text-center lg:text-start text-[55px] uppercase font-semibold">
                           {techData.name}
                        </h1>
                    </div>
                    <div>
                        <p className="text-center lg:text-start text-[25px] text-gray-400">
                            {techData.description}
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: bg_url  }} className={`order-1 min-h-[400px] md:min-h-[320px] lg:min-h-[600px] 2xl:min-h-[900px] lg:order-2  bg-cover bg-no-repeat   min-w-full`}>
                {/* <img loading="lazy" className="min-w-screen lg:min-w-[500px] 2xl:min-w-[700px] " src={techData.images.portrait} alt="" /> */}
            </div>
        </div>
        </>
    )
}