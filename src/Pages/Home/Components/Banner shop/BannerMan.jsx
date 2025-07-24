import React from 'react'
import BannerShop from './BannerShop'
import img1 from "../../../../assets/Img/BannerMan.jpg"
export default function BannerMan()
{
    return (
        <section>
            <BannerShop
                imgSrc={img1}
                text1="Sale 40% Off"
                text2="new collection"
                linkTo="/man"
                linkText="Shop Now"
            />
        </section>
    )
}
