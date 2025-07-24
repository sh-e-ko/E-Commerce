import React from 'react'
import FeaturedProducts from '../../../Components/FeaturedProducts'
import { products } from '../../../../../../../Api/Products'
export default function FeaturedGirl()
{
    return (
        <section>
            <FeaturedProducts endpoint="/kids/girls" apiInstance={products} category="girl" />
        </section>
    )
}
