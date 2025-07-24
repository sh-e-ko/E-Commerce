import React from 'react'
import { products } from '../../../Api/Products'
import Product from '../Products/Product'

export default function Man()
{
  return (
    <section>
      <Product endpoint="/men" apiInstance={products} category="man" />
    </section>
  )
}
