import { MainContainer ,Container } from '../../../Components'
import { Outlet } from 'react-router-dom'


export default function Destination(){
    return (
        <>
        <MainContainer
        
        desktopBg='xl:bg-destination-desktop'
        mobileBg='bg-destination-mobile'
        tabBg='md:bg-destination-tablet'>

            <Container>

            <div>
                <div className='mt-[180px] lg:mt-[50px]'>
                    <p className='text-white text-[35px] flex items-center gap-5 justify-center lg:justify-start'><span className=' text-gray-400 font-semibold'>01</span><span className=' uppercase'>pic your destination</span></p>
                   <Outlet />
                </div>
            </div>

            </Container>

        </MainContainer>
        </>
    )
}