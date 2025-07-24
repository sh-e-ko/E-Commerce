import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../../assets/img/logo.png"
export default function Logo()
{
  return (
    <section>
      <Link to='/home'>  <img src={logo} alt='photo' /></Link>
    </section>
  )
}
