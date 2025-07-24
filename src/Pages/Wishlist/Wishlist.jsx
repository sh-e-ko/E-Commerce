import React from 'react';
import { useWishlist } from './WishlistContext/WishlistContext';
import style from './WishList.module.css'
export default function Wishlist()
{
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <section >
            <h2 className={style.textWishlist}>My Wishlist</h2>

            {wishlist.length === 0 ? (
                <p className={style.textWishlist}>No products in your wishlist yet </p>
            ) : (


                <div className={style.Wishlist}>
                    {wishlist.map(item => (
                        <div className={style.Wishlistcard} key={item.id}>
                            <img loading="lazy" src={item.img} alt={item.title} className={style.image} />
                            <h3 className={style.Wishlisttext1}>{item.title}</h3>
                            <p className={style.Wishlisttext2}>{item.price}$</p>
                            <p className={style.Wishlisttext3}>{item.rating}</p>
                            <p> {item.sizes}</p>
                            <button className={style.btn} onClick={() => removeFromWishlist(item.id)}>
                               x
                            </button>
                        </div>
                    ))}

                    
                </div>)}
        </section>
    );
}
