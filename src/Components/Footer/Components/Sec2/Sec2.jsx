import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../../assets/img/logo_light.png'
import Links from './Links'
import img1 from '../../../../assets/img/master_card.png'
import img2 from '../../../../assets/img/paypal.png'
import img3 from '../../../../assets/img/amarican_express.png'
import img4 from '../../../../assets/img/visa.png'
import img5 from '../../../../assets/img/discover.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import style from './Sec2.module.css'

export default function Sec2()
{
    return (
        <div className={style.footer}>


            <section className={style.sec1}>

                <section>
                    <div className={style.sectionlogo}>
                        <img alt='photo' src={img} loading="lazy" />
                        <p >If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text . </p>
                    </div>
                    <div className={style.Iconsfooter}>
                        <CiFacebook />
                        <FaInstagram />
                        <FaWhatsapp />
                        <FaTwitter />
                        <FaTiktok />
                        <FaYoutube />
                    </div>
                </section>

                <section className={style.links}>
                    <div>
                        <Links
                            title="Useful Links"
                            items={[
                                { label: "About Us", link: "/soon" },
                                { label: "FAQ", link: "/soon" },
                                { label: "Location", link: "/soon" },
                                { label: "Affiliates ", link: "/soon" },
                                { label: "Contact", link: "/soon" },
                            ]}
                        />
                    </div>

                    <div>
                        <Links
                            title="Category"
                            items={[
                                { label: "Men", link: "/soon" },
                                { label: "Woman", link: "/soon" },
                                { label: "Kids", link: "/soon" },
                                { label: "Best Saller ", link: "/soon" },
                                { label: "New Arrivals", link: "/soon" },
                            ]}
                        />
                    </div>

                    <div>
                        <Links
                            title="My Account"
                            items={[
                                { label: "My Account", link: "/soon" },
                                { label: "Discount", link: "/soon" },
                                { label: "Returns", link: "/soon" },
                                { label: "Orders History ", link: "/soon" },
                                { label: "ontOrder Trackingact", link: "/soon" },
                            ]}
                        />
                    </div>

                    <div className={style.textContact}>
                        <h4>Contact info</h4>
                        <p> <span> <FaStreetView /></span> 123 Street, Old Trafford, New South London , UK </p>
                        <Link> <span><MdEmail /></span>  info@sitename.com</Link>
                        <h3> <span> <FaPhoneVolume /> </span> + 457 789 789 65 </h3>
                    </div>
                </section>

            </section>
            <hr />
            <section className={style.sec2}>
                <p>© 2025 All Rights Reserved by Sherif</p>
                <div className={style.sec2img}>
                    <img src={img1} alt='photo' loading="lazy" />
                    <img src={img2} alt='photo' loading="lazy" />
                    <img src={img3} alt='photo' loading="lazy" />
                    <img src={img4} alt='photo' loading="lazy" />
                    <img src={img5} alt='photo' loading="lazy" />
                </div>
            </section>
        </div>
    )
}
