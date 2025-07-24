import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from '../../../../assets/Img/user_img1.jpg'
import img2 from '../../../../assets/Img/user_img2.jpg'
import img3 from '../../../../assets/Img/user_img3.jpg'
import img4 from '../../../../assets/Img/user_img4.jpg'
import style from './ClientSay.module.css'
import'./ClientSay.css'

export default function ClientSay()
{
    const slides = [
        {
            img: img1,
            text2: "Lissa Castro",
            text1: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.  "
        },
        {
            img: img2,
            text2: "Alden Smith",
            text1: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.  "
        },
        {
            img: img3,
            text2: "Daisy Lana",
            text1: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.  "
        },
        {
            img: img4,
            text2: "John Becker",
            text1: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.  "
        },
    ];
    return (
        <section className={style.conteiner}>
            <h4 className={style.text}>Our Client Say!</h4>
            <Swiper navigation={true} modules={[Navigation]} className='client-swiper'>
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <section className={style.crud}>
                            <p className={style.text1}>{slide.text1}</p>
                            <div className={style.box}>
                                <img loading="lazy" src={slide.img} alt="photo" className={style.img} />
                                <p className={style.text2}>{slide.text2}</p>
                            </div>

                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
