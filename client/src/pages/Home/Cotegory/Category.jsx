
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitel from '../../../components/SectionTitel/SectionTitel';
const Category = () => {
    return (
        <div className='md:w-10/12 max-w-11/12 mx-auto'>
            <SectionTitel  subHeading={'From 11.00am to 10.00pm'} heading={'Order Online'} >
                
            </SectionTitel>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide><img src={slide1} alt="" className='rounded-md' />
        <h3 className='text-center uppercase md:text-2xl text-white -mt-12'>Salad</h3>
        </SwiperSlide>
         <SwiperSlide><img src={slide2} alt="" className='rounded-md' />
         
         <h3 className='text-center uppercase md:text-2xl text-white -mt-12'>soups</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" className='rounded-md' />
        <h3 className='text-center uppercase md:text-2xl text-white -mt-12'>pizzas</h3>
        </SwiperSlide>
         <SwiperSlide><img src={slide4} alt="" className='rounded-md' />
         <h3 className='text-center uppercase md:text-2xl text-white -mt-12'>desserts</h3>
         </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" className='rounded-md' />
        
        <h3 className='text-center uppercase md:text-2xl text-white -mt-12'>soups</h3></SwiperSlide>
                <SwiperSlide><img src={slide1} className='rounded-md' alt="" />
        <h3 className='text-center uppercase md:text-2xl text-white -mt-12'>Salad</h3>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;