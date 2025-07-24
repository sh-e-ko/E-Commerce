import React from 'react'
import { products } from '../../../Api/Products'
import Product from '../Products/Product'

export default function Girl() {
  return (
    <section>
      <Product endpoint="/kids/girls" apiInstance={products} category="girl" />
    </section>
  )
}
