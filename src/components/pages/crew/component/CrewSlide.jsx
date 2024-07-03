

export default function CrewSlide({ name, bio, role, image }) {
  return (
  
        
                    <div className="wrapper grid grid-cols-1 lg:grid-cols-2 text-white place-items-center gap-11">
                        <div className='p-5 flex flex-col gap-11'>
                            <div>
                                <h1 className=' text-[30px] text-center md:text-start md:text-[45px] uppercase text-gray-400'>
                                    {role}
                                </h1>
                                <h1 className=' text-[30px] text-center md:text-start md:text-[50px] uppercase font-semibold'>
                                    {name}
                                </h1>
                            </div>
                            <div>
                                <p className=' text-[15px] text-center md:text-start md:text-[25px] max-w-[300px] lg:max-w-[650px]'>
                                   {bio}
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center'>
                            <img className='max-w-[250px] lg:max-w-[600px]' src={image} alt={name} />
                        </div>
                    </div>
            
    
  )
}
