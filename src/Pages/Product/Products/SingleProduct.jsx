import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { products } from '../../../Api/Products';
import MainLayouts from '../../../Components/layouts/MainLayouts/MainLayouts'
import Stars from '../../../Components/layouts/star/Stars';
import BtnCart from '../../Cart/ContextCart/BtnCart';
import WishlistBtn from '../../Wishlist/WishlistBtn';
import style from './SingleProducts.module.css'

export default function SingleProduct()
{
    const { productid } = useParams();


    const [Pro, setPro] = useState([]);

    useEffect(() =>
    {

        products.get(`/products/${productid}`)
            .then((res) =>
            {
                console.log("3f", res.data)
                setPro(res.data);
            })
            .catch((err) => console.error(err));
    }, [productid]);
    return (
        <MainLayouts>
            <section className={style.container}>
                <div className={style.card}>
                    <div className={style.icon}>
                        <WishlistBtn product={Pro} />
                        <BtnCart product={Pro} />
                    </div>
                    <div className={style.img}>
                        <img src={Pro.img} alt={Pro.title} />
                    </div>


                    <div className={style.text}>

                        <h3 >{Pro.title}</h3>

                        <p ><span>price :</span> {Pro.price}$</p>

                        {/* <p>{Pro.rating}</p> */}
                        {Pro.sizes && (
                            <p className={style.sizes}>
                                <span>Sizes :</span> {Pro.sizes.join(', ')}
                            </p>
                        )}
                        <p className={style.inStock}>  <span>inStock :</span> {Pro.inStock}</p>
                        {Pro.rating && <Stars rating={Pro.rating} />}
                       
                    </div>
                </div>
            </section>
        </MainLayouts>
    )
}
