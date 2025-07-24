import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from "../Header.module.css" 
export default function DropDownHeader({ title, title1, title2, title3, img1, img2, img3 })
{
    const [selected, setSelected] = useState({ text: title, img: null });

    return (
        <section>



            <NavDropdown
                title={
                    <span>
                        {selected.img && (<img loading="lazy" className={style.imgdropdown} src={selected.img} alt="selected" />)}
                        {selected.text}
                    </span>
                }>
                <NavDropdown.Item onClick={() => setSelected({ text: title1, img: img1 })}>
                    {img1 && <img loading="lazy" src={img1} alt="img1" className={style.imgdropdown} />}
                    {title1}
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => setSelected({ text: title2, img: img2 })}>
                    {img2 && <img loading="lazy" src={img2} alt="img2" className={style.imgdropdown} />}
                    {title2}
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => setSelected({ text: title3, img: img3 })}>
                    {img3 && <img loading="lazy" src={img3} alt="img3" className={style.imgdropdown} />}
                    {title3}
                </NavDropdown.Item>
            </NavDropdown>

        </section>
    );
}
