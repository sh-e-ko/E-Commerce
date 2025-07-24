import React from 'react'
import { products } from '../../../Api/Products'
import Product from '../Products/Product'

export default function Boy() {
  return (
    <section>
      <Product endpoint="/kids/boys" apiInstance={products} category="boy" />
    </section>
  )
}
