import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaRegEye } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/navigation';
import './Featured.css';
import style from './Featured.module.css';
import WishlistBtn from '../../../../Wishlist/WishlistBtn';
import { RiShoppingCart2Fill } from "react-icons/ri";
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
                slidesPerView={4}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="featured-swiper"
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



