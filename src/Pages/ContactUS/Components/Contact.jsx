import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { FaInstagram, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import img from '../../../assets/Img/login.png'
import style from './Contact.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { object } from 'yup'
import Nav from '../../../Components/NavBar/Nav/Nav'
export default function Contact()
{

    const navigate = useNavigate();

    const contact = useFormik({
        validateOnMount: true,

        initialValues: {
            name: "",
            email: "",
            message: ""

        },

        validationSchema: object({
            email: Yup.string().email("Invalid email").required("Email is required"),
            name: Yup.string().required("name is required"),
            message: Yup.string().required("message is required"),
        }),

        onSubmit: (values) =>
        {
            toast.success("message send ✅");
            navigate("/home", { replace: true });

        }

    })

    return (
        <section className={style.contact}>
            <div className={style.contacttext}>
                <p> contact us</p>
            </div>
            <div className={style.contactimg}>
                <img src={img} alt='photo' loading='lazy' />
            </div>
            <form className={style.contactform}>
                <div className={style.contactinput}>
                    <input type='text' placeholder='full name' {...contact.getFieldProps("name")} />
                    {contact.errors.name && contact.touched.name && <span>{contact.errors.name}</span>}
                </div>
                <div className={style.contactinput}>
                    <input type='email' placeholder='E-mail' {...contact.getFieldProps("email")} />
                    {contact.errors.email && contact.touched.email && <span>{contact.errors.email}</span>}
                </div>
                <div className={style.contactinput}>
                    <input type='text' placeholder='message' {...contact.getFieldProps("message")} />
                    {contact.errors.message && contact.touched.message && <span>{contact.errors.message}</span>}
                </div>
                <Link
                    className={style.btn}
                    onClick={contact.handleSubmit}
                    disabled={!contact.isValid}
                >Contact us</Link>
                <div className={style.contacticons}>
                    <span> <CiFacebook /></span>
                    <span><FaInstagram /></span>
                    <span> <FaWhatsapp /></span>
                    <span><FaTwitter /></span>
                    <span><FaTiktok /></span>
                    <span> <FaYoutube /></span>
                </div>
            </form>
        </section>
    )
}
