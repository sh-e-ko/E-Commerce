import React from 'react'
import img from '../../../../../../assets/ImgWoman/10.png'
import BannerProducts from '../../Components/BannerProducts'
export default function BannerWomanPro()
{
    return (
        <section>
            <BannerProducts img={img} text1="New season trends!" text2='Best Collection from woman' text3="Sale Get up to 50% Off" to='/women' />
        </section>
    )
}
