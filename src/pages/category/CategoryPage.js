import React from 'react'
import { useParams } from 'react-router-dom'
import ProductList from './ProductList'

export default function CategoryPage() {
    const {cat} = useParams()
  return (
    <div>
      {/* Category: {cat} */}
      <ProductList/>
    </div>
  )
}
