import React from 'react'
import Breadcrum from '../componant/Breadcrum'
import About from '../componant/About'
import Feature from '../componant/Feature'
import Testimonial from '../componant/Testimonial'
import Newsletter from '../componant/Newsletter'

export default function AboutPage() {
  return (
    <>
    <Breadcrum title="About Us"/>
    <About/>
    <Feature/>
    <Testimonial/>
    <Newsletter/>
    
    </>
  )
}
