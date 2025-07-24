import React from 'react'
import img1 from "../../../../assets/Img/BannernGirl.jpg"
import BannerShop from './BannerShop';
export default function BannerGirl()
{
  return (
    <section>
      <BannerShop
        imgSrc={img1}
        text1="super sale"
        text2="new collection"
        linkTo="/girl"
        linkText="Shop Now"
      />
    </section>
  )
}
