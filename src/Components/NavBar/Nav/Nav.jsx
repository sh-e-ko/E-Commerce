import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropDownNav from './Components/DropDownNav'
import Icons from './Components/Icons'
import LinksNav from './Components/LinksNav'
import Logo from './Components/Logo'
import MultiDropDownNav from './Components/MultiDropDownNav'
import style from './Nav.module.css'
import { Offcanvas } from 'react-bootstrap'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Nav()
{
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <nav className={`${style.nav} navbar navbar-expand-lg bg-white sticky-top`}>
            <div className="container-fluid justify-content-around align-items-center px-4">

                <section className="d-flex align-items-center">
                    <Logo />
                </section>

                <section className="d-flex align-items-center d-lg-none">
                    <button className={style.toggleBtn} onClick={handleShow}>
                        <HiOutlineMenuAlt3 />
                    </button>
                </section>

                <section className={`${style.DropDown} d-none d-lg-flex`}>
                    <div>
                        <DropDownNav
                            title="home"
                            items={[
                                { label: <Link to='/man'>Fashion Man</Link> },
                                { label: <Link to='/women'>Fashion Woman</Link> },
                                { label: <Link to='/girl'>Fashion girl</Link> },
                                { label: <Link to='/boy'>Fashion boy</Link> },
                            ]}
                        />
                    </div>

                    <div>
                        <DropDownNav
                            title="pages"
                            items={[
                                { label: <Link to='/about'>about us</Link> },
                                { label: <Link to='/contact'>contact us</Link> },
                                { label: <Link to='/faq'>faq 1</Link> },
                                { label: <Link to='/*'>404 error page</Link> },
                                { label: <Link to='/login'>login</Link> },
                                { label: <Link to='/register'>register</Link> },
                            ]}
                        />
                    </div>

                    <div>
                        <MultiDropDownNav
                            title="Blog"
                            items={[
                                {
                                    label: "grids",
                                    children: [
                                        { label: "Single Blog Left Sidebar", link: "/soon" },
                                        { label: "Single Blog Right Sidebar", link: "/soon" },
                                    ]
                                },
                                {
                                    label: "masonry",
                                    children: [
                                        { label: "Single Blog Left Sidebar", link: "/soon" },
                                        { label: "Single Blog Right Sidebar", link: "/soon" },
                                    ]
                                },
                                {
                                    label: "single post",
                                    children: [
                                        { label: "Single Blog Left Sidebar", link: "/soon" },
                                        { label: "Single Blog Right Sidebar", link: "/soon" },
                                    ]
                                },
                                {
                                    label: "list",
                                    children: [
                                        { label: "Single Blog Left Sidebar", link: "/soont" },
                                        { label: "Single Blog Right Sidebar", link: "/soon" },
                                    ]
                                },
                            ]}
                        />
                    </div>

                    <div>
                        <MultiDropDownNav
                            title="products"
                            items={[
                                {
                                    label: <Link to='/man'> Man </Link>
                                },
                                {
                                    label: <Link to='/women'> woman </Link>
                                },
                                {
                                    label: "children",
                                    children: [
                                        { label: "boy", link: "/boy" },
                                        { label: "girl", link: "/girl" },
                                    ]
                                },
                            ]}
                        />
                    </div>

                    <div>
                        <LinksNav />
                    </div>

                    <div>
                        <Icons />
                    </div>
                </section>

                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className={style.offcanvasLinks}>
                            <DropDownNav
                                title="home"
                                items={[
                                    { label: <Link to='/man'>Fashion Man</Link> },
                                    { label: <Link to='/women'>Fashion Woman</Link> },
                                    { label: <Link to='/girl'>Fashion girl</Link> },
                                    { label: <Link to='/boy'>Fashion boy</Link> },
                                ]}
                            />
                            <DropDownNav
                                title="pages"
                                items={[
                                    { label: <Link to='/about'>about us</Link> },
                                    { label: <Link to='/contact'>contact us</Link> },
                                    { label: <Link to='/faq'>faq 1</Link> },
                                    { label: <Link to='/*'>404 error page</Link> },
                                    { label: <Link to='/login'>login</Link> },
                                    { label: <Link to='/register'>register</Link> },
                                ]}
                            />
                            {/* <MultiDropDownNav
                                title="Blog"
                                items={[
                                    {
                                        label: "grids",
                                        children: [
                                            { label: "Single Blog Left Sidebar", link: "/soon" },
                                            { label: "Single Blog Right Sidebar", link: "/soon" },
                                        ]
                                    }
                                ]}
                            /> */}
                            <MultiDropDownNav
                                title="products"
                                items={[
                                    {
                                        label: <Link to='/man'> Man </Link>
                                    },
                                    {
                                        label: <Link to='/women'> woman </Link>
                                    },
                                    {
                                        label: "children",
                                        children: [
                                            { label: "boy", link: "/boy" },
                                            { label: "girl", link: "/girl" },
                                        ]
                                    },
                                ]}
                            />
                            <LinksNav />
                            <Icons />
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </nav>
    )
}
