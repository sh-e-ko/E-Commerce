import React from 'react'
import { Link } from 'react-router-dom'
import style from './Sec2.module.css'
export default function Links({ title, items}) {
  return (
    <section>
          <h4  className={style.textLink}>{title}</h4>
          <span>
              {items.map((item, index) => (
                  <div key={index}>
                      <Link className={style.link} to={item.link}>{item.label}</Link>
                  </div>
              ))}
          </span>
    </section>
  )
}
