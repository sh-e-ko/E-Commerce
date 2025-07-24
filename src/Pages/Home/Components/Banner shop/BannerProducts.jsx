import React from 'react'
import BannerBoy from './BannerBoy'
import BannerGirl from './BannerGirl'
import BannerMan from './BannerMan'
import BannerWonan from './BannerWonan'
import style from './BannerShop.module.css'

export default function BannerProducts()
{
    return (
        <section className={style.crud}>

            <div className={style.box}>
                <BannerMan />
                <BannerWonan />
            </div>

            <div className={style.box}>
                <BannerGirl />
                <BannerBoy />
            </div>
        </section>
    )
}
