import React from 'react'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'
export default function BtnCart({ product })
{
    const { addToCart } = useCart();
    return (
        <section>
            <Link onClick={() => addToCart(product)}>
                <RiShoppingCart2Fill />
            </Link>
        </section>
    )
}
