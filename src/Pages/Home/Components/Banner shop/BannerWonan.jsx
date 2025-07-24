import React from 'react'
import BannerShop from './BannerShop'
import img1 from "../../../../assets/Img/BannerWoman.jpg"
export default function BannerWonan()
{
  return (
    <section>
      <BannerShop
        imgSrc={img1}
        text1="super sale"
        text2="new collection"
        linkTo="/women"
        linkText="Shop Now"
      />
    </section>
  )
}
