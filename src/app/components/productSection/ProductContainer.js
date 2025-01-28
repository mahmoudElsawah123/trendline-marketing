import React, { Suspense } from 'react'
import ProductFilter from './ProductFilter'
import ProductCard from './ProductCard'
import ProductLang from './ProductLang'

const ProductContainer = async({param}) => {
  
  const res = await fetch("https://nwaa.trendline.marketing/api/categories/sub/1",{
    method : 'GET',
    headers : {
      "X-lang" : param
    },
    cache : 'force-cache'
  })
  if(!res.ok){
    return <div>Error</div>
  }
  const data = await res.json()
  const subFilterCats = data.data.sub_categories.meta
  return (
    <div className='container my-10'>
         <ProductLang data={data} subFilterCats={subFilterCats}/>      
    </div>
  )
}

export default ProductContainer
