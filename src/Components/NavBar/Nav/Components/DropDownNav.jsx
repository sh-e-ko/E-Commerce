
import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Style from '../Nav.module.css'

export default function DropDownNav({ title, items })
{
    return (
        <section>
            <NavDropdown title={title}>
                {items.map((item, index) =>
                {
                    const styledLabel = React.isValidElement(item.label)
                        ? React.cloneElement(item.label, {
                            className: Style.navLink,
                        })
                        : item.label;

                    return (
                        <NavDropdown.Item key={index}>
                            {styledLabel}
                        </NavDropdown.Item>
                    );
                })}
            </NavDropdown>
        </section>
    );
}
