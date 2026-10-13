import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './componant/Navbar'
import Footer from './componant/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

import FeaturePage from './pages/FeaturePage'
import FaqPage from './pages/FaqPage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import TastimonialPage from './pages/TastimonialPage'
import ErrorPage from './pages/ErrorPage'
import ContactUsPage from './pages/ContactUsPage'
import PrivicyPolicyPage from './pages/PolicyPages/PrivicyPolicyPage'

import TermsAndConditionsPage from './pages/PolicyPages/TermsnAndConditionsPage'
import RefundPolicy from './pages/PolicyPages/ReturnPolicyPage'
import LoginPage from './pages/User/LoginPage'
import SignUpPage from './pages/User/SignUpPage'
import ProfilePage from './pages/User/ProfilePage'
import CartPage from './pages/User/CartPage'
import CheckoutPage from './pages/User/Checkout'
import OrderConfirmationPage from './pages/User/OrderConfirmationPage'



import ReturnPolicyPage from './pages/PolicyPages/ReturnPolicyPage'
import AdminHomePage from './pages/Admin/AdminHomePage'
import AdminMaincategoryPage from './pages/Admin/MainCategory/AdminMaincategoryPage'
import AdminCreateMaincategoryPage from './pages/Admin/Maincategory/AdminCreateMaincategory'
import AdminUpdateMaincategoryPage from './pages/Admin/Maincategory/AdminUpdateMaincategory'
import AdminSubcategoryPage from './Pages/Admin/Subcategory/AdminSubcategoryPage'
import AdminCreateSubcategoryPage from './Pages/Admin/Subcategory/AdminCreateSubcategory'
import AdminUpdateSubcategoryPage from './Pages/Admin/Subcategory/AdminUpdateSubcategory'

import AdminBrandPage from './Pages/Admin/Brand/AdminBrandPage'
import AdminCreateBrandPage from './Pages/Admin/Brand/AdminCreateBrand'
import AdminUpdateBrandPage from './Pages/Admin/Brand/AdminUpdateBrand'

import AdminFeaturePage from './Pages/Admin/Feature/AdminFeaturePage'
import AdminCreateFeaturePage from './Pages/Admin/Feature/AdminCreateFeature'
import AdminUpdateFeaturePage from './Pages/Admin/Feature/AdminUpdateFeature'

import AdminFaqPage from './Pages/Admin/Faq/AdminFaqPage'
import AdminCreateFaqPage from './Pages/Admin/Faq/AdminCreateFaq'
import AdminUpdateFaqPage from './Pages/Admin/Faq/AdminUpdateFaq'
import AdminSettingPage from './pages/Admin/Setting/AdminSettingPage'


import AdminProductPage from './Pages/Admin/Product/AdminProductPage'
import AdminCreateProductPage from './Pages/Admin/Product/AdminCreateProduct'
import AdminUpdateProductPage from './Pages/Admin/Product/AdminUpdateProduct'
import AdminNewsletterPage from './pages/Admin/Newsletter/AdminNewsletterPage'
import AdminContactUsPage from './pages/Admin/ContactUs/AdminContactUsPage'
import AdminContactUsShowPage from './pages/Admin/ContactUs/AdminContactUsShowPage'
import AdminCheckoutPage from './pages/Admin/Checkout/AdminCheckoutPage'
import AdminCheckoutShowPage from './pages/Admin/Checkout/AdminCheckoutShowPage'
import AdminUserPage from './pages/Admin/User/AdminUserPage'
import AdminCreateUserPage from './pages/Admin/User/AdminCreateUser'
import AdminUpdateUserPage from './pages/Admin/User/AdminUpdateUser'







export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/feature' element={<FeaturePage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/testimonial' element={<TastimonialPage />} />

        <Route path='/contactus' element={<ContactUsPage />} />

        <Route path='/privacy-policy' element={<PrivicyPolicyPage />} />
        <Route path='/tc' element={<TermsAndConditionsPage />} />
        <Route path='/refund-policy' element={<RefundPolicy />} />

        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />




        {/* Buyer Routes */}

        {localStorage.getItem("login") ?
          <>
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/order-confirmation' element={<OrderConfirmationPage />} />
          </> : null}



        {/* Admin Routes */}

        {localStorage.getItem("login") && localStorage.getItem("role") != "Buyer" ?
          <>
            <Route path='/admin' element={<AdminHomePage />} />

            <Route path='/admin/maincategory' element={<AdminMaincategoryPage />} />
            <Route path='/admin/maincategory/create' element={<AdminCreateMaincategoryPage />} />
            <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMaincategoryPage />} />

            <Route path='/admin/subcategory' element={<AdminSubcategoryPage />} />
            <Route path='/admin/subcategory/create' element={<AdminCreateSubcategoryPage />} />
            <Route path='/admin/subcategory/update/:id' element={<AdminUpdateSubcategoryPage />} />

            <Route path='/admin/brand' element={<AdminBrandPage />} />
            <Route path='/admin/brand/create' element={<AdminCreateBrandPage />} />
            <Route path='/admin/brand/update/:id' element={<AdminUpdateBrandPage />} />

            <Route path='/admin/feature' element={<AdminFeaturePage />} />
            <Route path='/admin/feature/create' element={<AdminCreateFeaturePage />} />
            <Route path='/admin/feature/update/:id' element={<AdminUpdateFeaturePage />} />

            <Route path='/admin/faq' element={<AdminFaqPage />} />
            <Route path='/admin/faq/create' element={<AdminCreateFaqPage />} />
            <Route path='/admin/faq/update/:id' element={<AdminUpdateFaqPage />} />

            <Route path='/admin/setting' element={<AdminSettingPage />} />

            <Route path='/admin/product' element={<AdminProductPage />} />
            <Route path='/admin/product/create' element={<AdminCreateProductPage />} />
            <Route path='/admin/product/update/:id' element={<AdminUpdateProductPage />} />


            <Route path='/admin/newsletter' element={<AdminNewsletterPage />} />

            <Route path='/admin/contactus' element={<AdminContactUsPage />} />
            <Route path='/admin/contactus/show/:id' element={<AdminContactUsShowPage />} />

            <Route path='/admin/checkout' element={<AdminCheckoutPage />} />
            <Route path='/admin/checkout/show/:id' element={<AdminCheckoutShowPage />} />

            {localStorage.getItem("role") === "Super Admin" ?
              <>
                <Route path='/admin/user' element={<AdminUserPage />} />
                <Route path='/admin/user/create' element={<AdminCreateUserPage />} />
                <Route path='/admin/user/update/:id' element={<AdminUpdateUserPage />} />
              </> : null}
          </> : null}





        

        <Route path='/*' element={<ErrorPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
