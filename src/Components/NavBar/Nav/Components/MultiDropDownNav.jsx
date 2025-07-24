import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import style from '../Nav.module.css';

export default function MultiDropDownNav({ title, items })
{
    return (
        <div>
            <NavDropdown title={title}>
                {items.map((item, index) =>
                {
                    const labelElement = React.isValidElement(item.label)
                        ? React.cloneElement(item.label, {
                            className: style.navLink,
                        })
                        : item.label;

                    return item.children ? (
                        <NavDropdown
                            key={index}
                            title={labelElement}
                            drop="end"
                            className={style.navLink}
                        >
                            {item.children.map((child, childIndex) => (
                                <NavDropdown.Item
                                    key={childIndex}
                                    as={Link}
                                    to={child.link}
                                    className={style.navLink}
                                >
                                    {child.label}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    ) : (
                        <NavDropdown.Item
                            key={index}
                            as={Link}
                            to={item.link}
                            className={style.navLink}
                        >
                            {labelElement}
                        </NavDropdown.Item>
                    );
                })}
            </NavDropdown>
        </div>
    );
}
