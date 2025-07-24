import React from 'react'
import { products } from '../../../Api/Products'
import Product from '../Products/Product'

export default function Woman()
{
    return (
        <section>
            <Product endpoint="/women" apiInstance={products} category="women" />
        </section>
    )
}
