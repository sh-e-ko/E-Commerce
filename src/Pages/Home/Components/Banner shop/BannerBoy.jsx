import React from 'react'
import BannerShop from './BannerShop'
import img1 from "../../../../assets/Img/BannerBoy.jpg"
export default function BannerBoy()
{
    return (
        <section>
            <BannerShop
                imgSrc={img1}
                text1="Sale 50% Offe"
                text2="new collection"
                linkTo="/boy"
                linkText="Shop Now"
            />
        </section>
    )
}
