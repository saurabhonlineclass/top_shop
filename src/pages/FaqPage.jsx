import React from 'react'
import Breadcrum from '../componant/Breadcrum'
import Newsletter from '../componant/Newsletter'
import Service from '../componant/Service'
import Faq from '../componant/Faq'

export default function FaqPage() {
    return (
        <>
            <Breadcrum title="FAQ" />
            <Faq />
            <Service/>
            <Newsletter />
        </>
    )
}