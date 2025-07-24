import React from 'react'
import DropDownHeader from './Components/DropDownHeader'
import img1 from '../../../assets/img/eng.png'
import img2 from '../../../assets/img/fn.png'
import img3 from '../../../assets/img/us.png'
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import Links from './Components/Links'
import style from './Header.module.css'
export default function Header()
{
    return (
        <header className={style.header}>
            <section className={style.dropdown}>

                <div>
                    <DropDownHeader title='country' title1='english' title2='france'
                        title3='united states' img1={img1} img2={img2} img3={img3} />
                </div>

                <div>
                    <DropDownHeader title='Currency' title1='usd' title2='eur' title3='gbr' />
                </div>

                <div>
                    <p className={style.phone}>  <span> <HiMiniDevicePhoneMobile /></span> 123-456-7890 </p>
                </div>

            </section>

            <section>

                <Links />

            </section>

        </header>
    )
}
