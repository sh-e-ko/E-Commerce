import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import style from './Banner.module.css'
import img1 from '../../../../assets/Img/banner1.jpg'
import img2 from '../../../../assets/Img/banner2.jpg'
import img3 from '../../../../assets/Img/banner3.jpg'
import img4 from '../../../../assets/Img/banner4.jpg'
import { Link } from 'react-router-dom';
import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Banner()
{

  useEffect(() =>
  {
    AOS.init({
      duration: 2000,
      delay: 300,

    });
  }, []);

  const slides = [
    { img: img2, text1: "Man Fashion", btn: "shop now", to: "/man", text2: "50% off in all products" },
    { img: img1, text1: "Woman Fashion", btn: "shop now", to: "/women", text2: "50% off in all products" },
    { img: img3, text1: "boy Fashion", btn: "shop now", to: "/boy", text2: "50% off in all products" },
    { img: img4, text1: "girl Fashion", btn: "shop now", to: "/girl", text2: "50% off in all products" },
  ];
  return (
    <section>
      <Swiper navigation={true} modules={[Navigation]} className="banner-swiper " >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section>
              <img loading="lazy" src={slide.img} alt="photo" className={style.img} />
              <div className={style.text} >
                <p data-aos="fade-right" className={style.text2}>{slide.text2}</p>
                <p className={style.text1}>{slide.text1}</p>
                <Link data-aos="zoom-in-up"  to={slide.to} className={style.btn} >{slide.btn}</Link>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
