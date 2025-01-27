import React, { Suspense } from 'react'
import CardSlider from './CardSlider'

const CardSliderContainer = async({param}) => {
  const res = await fetch("https://nwaa.trendline.marketing/api/categories/main",{
    method : 'GET',
    headers : {
      "X-lang" : param
    },
  })
  if(!res.ok){
    return <div>Error</div>
  }
  const data = await res.json()
  return (
    <div>
      <Suspense>
         <CardSlider data={data.data}/>
      </Suspense>
    </div>
  )
}

export default CardSliderContainer
