import React from 'react'
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import style from './BannerAbout.module.css'
export default function BannerAbout()
{

    const items = [
        {
            icon: <TbTruckDelivery />,
            title: "Free Delivery ",
            text: "If you are going to use of Lorem, you need to be sure there anything",


        },
        {
            icon: <GiTakeMyMoney />,
            title: "30 Day Return ",
            text: "If you are going to use of Lorem, you need to be sure there anything",


        },
        {
            icon: <MdOutlineSupportAgent />,
            title: "Free Delivery ",
            text: "If you are going to use of Lorem, you need to be sure there anything",


        },
    ];

    return (

        <section className={style.container}>
            {items.map((item, index) => (
                <div className={style.crud} key={index}>
                    <span className={style.icon} >{item.icon}</span>
                    <h4 className={style.title} >{item.title}</h4>
                    <p className={style.text} >{item.text}</p>
                </div>
            ))}
        </section>
    )
}
