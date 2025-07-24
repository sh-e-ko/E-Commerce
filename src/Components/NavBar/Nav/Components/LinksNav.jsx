import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Nav.module.css"
export default function LinksNav() {
  return (
    <section>
      <Link className={style.Links} to='/contact'>Contact Us</Link>
    </section>
  )
}
