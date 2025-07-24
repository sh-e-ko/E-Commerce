import React from 'react'
import style from './Sec1.module.css'
export default function Sec1()
{
    return (
        <section className={style.footer}>

            <div>
                <h4 className={style.text}>Subscribe Our Newsletter</h4>
            </div>
            <div>
                <input type='email' placeholder='enter email address' />
                <button type='submit'>subscribe</button>
            </div>


        </section>
    )
}
