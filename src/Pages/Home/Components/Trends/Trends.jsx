import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './Trends.module.css'
import img1 from '../../../../assets/Img/tranding_img.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Trends()
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
        <section className={style.container} >
            <img src={img1} alt='photo' className={style.img} />
            <div data-aos="zoom-in-up" className={style.text}>
                <p  className={style.text1}>New season trends! </p>
                <p className={style.text2}>Best Summer Collection</p>
                <p className={style.text3}>Sale Get up to 50% Off</p>
                <Link to='/women' className={style.btn}>shop now</Link>
            </div>
        </section>
    )
}
