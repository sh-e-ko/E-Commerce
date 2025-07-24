import React from 'react'
import { products } from '../../../../../../../Api/Products'
import FeaturedProducts from '../../../Components/FeaturedProducts'

export default function FeaturedBoy()
{
    return (
        <section>
            <FeaturedProducts endpoint="/kids/boys" apiInstance={products} category="boy" />
        </section>
    )
}
