import React from 'react'
import BannerProducts from '../../Components/BannerProducts'
import img from '../../../../../../assets/ImgMan/6.png'
export default function BannermanPro()
{
    return (
        <section>
            <BannerProducts img={img} text1="New season trends!" text2='Best Collection for man' text3="Sale Get up to 50% Off"  to='/man'/>
        </section>
    )
}
