import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Data from '/public/data.json'
import CrewSlide from './CrewSlide';

export default function ShowCrew() {
   
    return (
        <>
            <div className='lg:mt-[225px]'>
                <Swiper pagination={{
                    clickable: true,
                }} modules={[Pagination, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    className="mySwiper">

                    {
                        Data.crew.map((crewData, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <CrewSlide name={crewData.name} bio={crewData.bio} role={crewData.role} image={crewData.images.webp} />
                                </SwiperSlide>

                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}