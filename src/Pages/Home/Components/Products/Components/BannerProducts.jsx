import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './BannerProducts.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BannerProducts({ img, text1, text2, text3, to })
{

    useEffect(() =>
    {
        AOS.init({
            duration: 2000,
            delay: 500,
            once: false,
        });
    }, []);
    return (
        <section className={style.container}>
            <img loading="lazy" src={img} alt='photo' className={style.img} />
            <div data-aos="fade-left" className={style.text}>
                <p className={style.text1}>{text1}</p>
                <p className={style.text2}>{text2}</p>
                <p className={style.text3}>{text3}</p>
                <Link to={to} className={style.btn}>shop now</Link>
            </div>
        </section>
    )
}
