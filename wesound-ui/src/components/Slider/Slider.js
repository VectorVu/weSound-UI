import React from 'react';
import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper";
// import required modules
import { Container } from 'react-bootstrap';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/autoplay'


export default function Slider(){
    const imgs = ['https://avatar-ex-swe.nixcdn.com/slideshow/2022/05/24/3/7/3/9/1653358274934_org.jpg',
                  'https://avatar-ex-swe.nixcdn.com/slideshow/2022/05/24/3/7/3/9/1653358400414_org.jpg',
                  'https://avatar-ex-swe.nixcdn.com/slideshow/2022/05/17/6/6/f/f/1652780451051_org.jpg',
                  'https://avatar-ex-swe.nixcdn.com/slideshow/2022/05/24/3/7/3/9/1653359984205_org.jpg',
                  'https://avatar-ex-swe.nixcdn.com/slideshow/2022/04/30/4/e/1/d/1651289569627_org.jpg',
                  'https://avatar-ex-swe.nixcdn.com/slideshow/2022/03/30/c/f/1/2/1648628210442_org.jpg'
                    ]
    const slide = imgs.map((item, index)=>{
        return(
          <SwiperSlide key={index} className='SwiperSlide'>
            <img  src={item} />
          </SwiperSlide>
        )
    })
    return(
        
        <Container>
            <Swiper 
                modules={[Autoplay, Navigation, Pagination]} 
                autoplay={{ delay: 3000 }}
                navigation={true} 
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                {slide}
            </Swiper>
        </Container>
    )
}