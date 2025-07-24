import React from 'react'
import { Link } from 'react-router-dom'
import { LuGitCompareArrows } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlinePerson4 } from "react-icons/md";
import style from "../Header.module.css"
export default function Links()
{
    return (
        <div className={style.links}>
            <Link to='comaper'> <LuGitCompareArrows /> </Link>
            <Link to='/Wishlist'> <FaRegHeart /> Wishlist </Link>
            <Link to='/login' > <MdOutlinePerson4 /> Login </Link>
        </div>
    )
}
