import React from 'react'
import img from '../../../../../../../assets/ImgBoy/9.png'
import BannerProducts from '../../../Components/BannerProducts'
export default function BannerBoyPro()
{
    return (
        <section>
            <BannerProducts
                img={img}
                text1="New season trends!"
                text2='Best Collection for Boy' 
                text3="Sale Get up to 50% Off" to='/boy' />
        </section>
    )
}
