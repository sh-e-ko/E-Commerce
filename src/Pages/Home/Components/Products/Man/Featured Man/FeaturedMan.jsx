import React from 'react'
import FeaturedProducts from '../../Components/FeaturedProducts'
import { products } from '../../../../../../Api/Products'
export default function FeaturedMan() {
  return (
    <section>
      <FeaturedProducts endpoint="/men" apiInstance={products} category="man" />
    </section>
  )
}
