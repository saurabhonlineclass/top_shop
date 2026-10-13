import React from 'react'
import Breadcrum from '../componant/Breadcrum'
import Feature from '../componant/Feature'
import Newsletter from '../componant/Newsletter'
import Service from '../componant/Service'

export default function FeaturePage() {
  return (
    <div>
      <Breadcrum title="Feature"/>
      <Feature/>
      <Service/>
      <Newsletter/>
    </div>
  )
}

