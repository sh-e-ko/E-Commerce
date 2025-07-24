import React from 'react'
import style from '../Nav.module.css'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { LuGitCompareArrows } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlinePerson4 } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Icons()
{
    return (
        <section className={style.icons}>
            <Link to='/cart '><RiShoppingCart2Fill /></Link>
            <Link to='/Compare'> <LuGitCompareArrows /> </Link>
            <Link to='/Wishlist'> <FaRegHeart />  </Link>
            <Link to='/login' > <MdOutlinePerson4 />  </Link>
        </section>
    )
}
