import React from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.min.css'
import { useState } from "react";

export default function Carousel({slides}){
  const[hovered,sethovered] =useState(false);
  const handleMouseEnter =()=>{
    sethovered(true);
  }
  const handleMouseLeave =()=>{
    sethovered(true);
  }
    return(
        <div className="carouselcontainer">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {slides.map((slide)=>(
                <SwiperSlide key={slide.id}>
                  <div className="sliderbox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="withouthover">
                      <img className ="sliderimg" src={slide.background_image} alt ={slide.name}></img>
                      <h4 className="titleslider">{slide.name}</h4>
                      {
                        <h4 className="genre">
                        {
                          slide.genres.map((genre)=>(
                                <h4 className="genrename">{genre.name}</h4>
                              )
                          )
                        }
                        </h4>
                      }
                      <h4 className="ratingslider">&#11088;<span className="ratingslider"> ({slide.rating}/{slide.rating_top})</span></h4>
                    </div>
                    <div className="withover">
                        <h2 className="hovertitle">{slide.name}</h2>
                    </div>
                  </div>
                  
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
    )
}