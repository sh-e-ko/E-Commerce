import React, { Children } from 'react'
import Header from '../../NavBar/Header/Header'
import Nav from '../../NavBar/Nav/Nav'
import Footer from '../../Footer/Footer'
export default function MainLayouts({ children })
{
  return (
    <section>
      <div>
        {/* <Header />
        <hr /> */}
        <Nav />
      </div>
      {children}
      <div>
        <Footer />
      </div>


    </section>
  )
}
