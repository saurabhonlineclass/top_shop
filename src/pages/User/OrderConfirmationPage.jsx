import React from 'react'
import Breadcrum from '../../componant/Breadcrum'
import { Link } from 'react-router-dom'

export default function OrderConfirmationPage() {
    return (
        <>
            <Breadcrum title="Order Has Been Placed" />
            <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-bag-check display-1 text-primary"></i>
                            <h1 className="display-1">Thank You</h1>
                            <h1 className="mb-4">Order Has Been Placed</h1>
                            <p className="mb-4">Thank you for shopping with Us! Your order has been successfully placed and is now being processed. We’ll keep you updated about your order status and delivery. Sit back, relax, and get ready to receive your purchase at your doorstep soon.</p>
                            <Link className="btn btn-primary py-3 px-4" to="/shop">Shop More</Link>
                            <Link className="btn btn-primary py-3 px-4" to="/profile?option=Orders">Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}