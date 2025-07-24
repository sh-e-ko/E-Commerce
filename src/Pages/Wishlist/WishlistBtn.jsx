import React from 'react'
import Wishlist from './Wishlist';
import { useWishlist } from './WishlistContext/WishlistContext';
import { GoHeartFill } from "react-icons/go";
import style from './WishList.module.css'
import { Link } from 'react-router-dom';
export default function WishlistBtn({ product })
{

    const { addToWishlist } = useWishlist();

    console.log("wishlist current:", Wishlist);
    console.log("product to add:", product);

    return (
        <div>
            <Link className={style.btnlove} onClick={() => addToWishlist( product )}>
                <GoHeartFill />
            </Link>
        </div>
    )
}
