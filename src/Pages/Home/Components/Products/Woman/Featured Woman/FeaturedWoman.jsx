import React from 'react'
import FeaturedProducts from '../../Components/FeaturedProducts'
import { products } from '../../../../../../Api/Products'
export default function FeaturedWoman()
{
    return (
        <section>
            <FeaturedProducts endpoint="/women" apiInstance={products} category="women" />
        </section>
    )
}
