
import homeStyle from './home.module.css';
// import Container from '../common/container/Container';
import { MainContainer ,Container } from '../../../Components'
import { useState } from 'react';


export default function Home(){
    
    return (
        <>
       
        <MainContainer
        desktopBg='xl:bg-home-desktop'
        mobileBg='bg-home-mobile'
        tabBg='md:bg-home-tablet'
        >

        <Container >
            <div className='grid grid-cols-1 gap-11 xl:grid-cols-2  min-h-[1000px] flex-row justify-between items-end  p-11 '>
                    <div className=' text-white mt-[100px]'>
                        <p className=' text-[30px] text-center xl:text-start xl:text-[50px] uppercase'>so, you want to travel to</p>
                        <h1 className=' text-[120px] text-center xl:text-start xl:text-[250px] uppercase'>Space</h1>
                        <p className='text-[20px] xl:text-[25px] text-center xl:text-start'>
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div className=' grid place-content-center'>   
                        <div className=' flex shadow-2xl items-center justify-center xl:h-[500px]  xl:w-[500px] h-[250px] w-[250px]  rounded-full bg-white text-white'>
                            <p className=' text-black text-[50px] xl:text-[80px] uppercase font-semibold'>explore</p>
                        </div>
                    </div>
            </div>
        </Container>

        </MainContainer>
       


       
       
        </>
    )
}