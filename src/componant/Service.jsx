import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSetting } from "../Redux/ActionCreators/SettingActionCreators"

export default function Service() {
    let [settingData, setSettingData] = useState({
        siteName: import.meta.env.VITE_APP_SITE_NAME,
        phone: import.meta.env.VITE_APP_PHONE,
    })

    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            dispatch(getSetting())
            if (SettingStateData.length) {
                let item = {}
                Object.keys(settingData).forEach(key => {
                    item[key] = SettingStateData[0][key] ? SettingStateData[0][key] : settingData[key]
                })
                setSettingData({ ...item })
            }
        })()
    }, [SettingStateData.length])
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="mb-5">Our <span
                                className="text-uppercase text-primary bg-light px-2">Services</span></h1>
                            <p className='text-justify'>{settingData.siteName} is committed to making online shopping simple, convenient, and reliable. From discovering products to completing secure payments and receiving orders at your doorstep, we provide a smooth shopping experience supported by dependable technology, trusted sellers, and customer-focused services designed around your everyday needs.</p>
                            <p className="text-justify mb-5">We go beyond selling products by providing services that make every purchase more comfortable and worry-free. With reliable delivery, easy returns, secure payment options, and responsive customer support, {settingData.siteName} ensures that customers can shop confidently while enjoying excellent value and convenient solutions.</p>
                            <div className="d-flex align-items-center bg-light">
                                <div className="btn-square flex-shrink-0 bg-primary" style={{ width: "100px", height: "100px" }}>
                                    <i className="fa fa-phone fa-2x text-white"></i>
                                </div>
                                <div className="px-3">
                                    <h3><a href={`tel:${settingData.phone}`}>{settingData.phone}</a></h3>
                                    <span>Call us direct 24/7 for get a free consultation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-0">
                                <div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
                                    <div className="service-item h-100 d-flex flex-column justify-content-center bg-primary">
                                        <a href="#!" className="service-img position-relative mb-4">
                                            <img className="img-fluid w-100" src="/images/banner5.jpg" alt="" />
                                            <h3>Fast & Reliable Delivery</h3>
                                        </a>
                                        <p className="mb-0">Get your favorite products delivered safely to your doorstep with our dependable delivery service. We work to ensure timely shipping and convenient order tracking.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeIn" data-wow-delay="0.4s">
                                    <div className="service-item h-100 d-flex flex-column justify-content-center bg-light">
                                        <a href="#!" className="service-img position-relative mb-4">
                                            <img className="img-fluid w-100" src="/images/banner6.jpg" alt="" />
                                            <h3>Secure Payment</h3>
                                        </a>
                                        <p className="mb-0">Shop confidently with secure and convenient payment options. Your transaction details are protected with reliable security measures for a safe and worry-free checkout experience.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeIn" data-wow-delay="0.6s">
                                    <div className="service-item h-100 d-flex flex-column justify-content-center bg-light">
                                        <a href="#!" className="service-img position-relative mb-4">
                                            <img className="img-fluid w-100" src="/images/banner7.jpg" alt="" />
                                            <h3>Easy Returns & Refunds</h3>
                                        </a>
                                        <p className="mb-0">Changed your mind? Our simple return and refund service makes eligible product returns convenient, helping you receive replacements or refunds according to our return policy.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeIn" data-wow-delay="0.8s">
                                    <div className="service-item h-100 d-flex flex-column justify-content-center bg-primary">
                                        <a href="#!" className="service-img position-relative mb-4">
                                            <img className="img-fluid w-100" src="/images/banner8.jpg" alt="" />
                                            <h3>Customer Support</h3>
                                        </a>
                                        <p className="mb-0">Our dedicated support team is ready to assist with product questions, orders, payments, deliveries, returns, and other concerns, ensuring a smooth shopping experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
