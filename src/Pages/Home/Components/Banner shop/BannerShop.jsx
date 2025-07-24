import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './BannerShop.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function BannerShop({ imgSrc, text1, text2, linkTo, linkText })
{
    useEffect(() =>
    {
        AOS.init({
            duration: 1000,
            delay: 300,
            once: false,
        });
    }, []);

    return (
        <section className={style.conteiner}>
            <img loading="lazy" src={imgSrc} alt="photo" className={style.img} />
            <div data-aos="zoom-in-up" className={style.text}>
                <p className={style.text1}>{text1}</p>
                <p className={style.text2}>{text2}</p>
                <Link className={style.btn} to={linkTo}>{linkText}</Link>
            </div>
        </section>
    );
}
