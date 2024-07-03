import { MainContainer, Container } from '../../../Components'
import { Outlet } from 'react-router-dom'


export default function Technology() {
    return (
        <>
            <MainContainer

                desktopBg='xl:bg-technology-desktop'
                mobileBg='bg-technology-mobile'
                tabBg='md:bg-technology-tablet'>


                <Container>

                    <div>
                        <div className='mt-[180px] lg:mt-[50px]'>
                            <p className='text-white md:text-[35px] text-[25px] flex items-center gap-5 justify-center lg:justify-start'><span className=' text-gray-400 font-semibold'>03</span><span className=' uppercase'>space launch 101</span></p>
                            <Outlet />
                        </div>
                    </div>

                </Container>

            </MainContainer>
        </>
    )
}