import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaRegEye } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/navigation';
import './Featured.css';
import style from './Featured.module.css';
import WishlistBtn from '../../../../Wishlist/WishlistBtn';
import { Link } from 'react-router-dom';
import BtnCart from '../../../../Cart/ContextCart/BtnCart';

export default function FeaturedProducts({ endpoint = "/products", apiInstance, category })
{
    const [Products, setProducts] = useState([]);

    useEffect(() =>
    {
        if (!apiInstance) return;

        apiInstance
            .get(endpoint)
            .then((res) =>
            {
                console.log("DATA:", res.data);
                setProducts(res.data.slice(0, 6));
            })
            .catch((err) => console.error(err));
    }, [endpoint, apiInstance]);

    return (
        <section className={style.featuredSection}>
            <h4 className={style.text}>Featured Products</h4>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                navigation={true}
                className="featured-swiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                }}
            >
                {Products.map(product => (
                    <SwiperSlide key={product.id}>
                        <div className={style.card}>
                            <img loading="lazy" src={product.img} alt={product.title} className={style.image} />
                            <div className={style.fbtn}>
                                <WishlistBtn className={style.WishlistBtn} product={product} />
                                <Link to={`/${category}/${product.id}`}><FaRegEye /></Link>
                                <BtnCart product={product} />
                            </div>

                            <div className={style.overlay}>
                                <h3 className={style.title}>{product.title}</h3>
                                <p className={style.price}>{product.price}$</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}



