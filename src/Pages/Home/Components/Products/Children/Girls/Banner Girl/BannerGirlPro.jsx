import React from 'react'
import img from '../../../../../../../assets/ImgGirls/1.png'
import BannerProducts from '../../../Components/BannerProducts'
export default function BannerGirlPro()
{
    return (
        <section>
            <BannerProducts
             img={img}
              text1="New season trends!" 
              text2='Best Collection' 
              text3="Sale Get up to 50% Off" 
              to='/girl' />
        </section>
    )
}
