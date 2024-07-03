import { MainContainer, Container } from '../../../Components'
import { Outlet } from 'react-router-dom'
export default function Crew() {
    return (
        <>
            <MainContainer

                desktopBg='xl:bg-crew-desktop'
                mobileBg='bg-crew-mobile'
                tabBg='md:bg-crew-tablet'>
                <Container>

                    <div className='overflow-hidden'>
                        <div className='mt-[180px] lg:mt-[50px]'>
                            <p className='text-white md:text-[35px] text-[25px] flex items-center gap-5 justify-center lg:justify-start '><span className=' text-gray-400 font-semibold'>02</span><span className=' uppercase'>meet your crew</span></p>
                            <Outlet />
                        </div>
                    </div>

                </Container>

            </MainContainer>
        </>
    )
}