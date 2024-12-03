import React from 'react'
import Signin from './Components/Signin/Signin'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Header2 from './Components/Header2/Header2'
import Restourants from './Components/Restourants/Restourants'
import HeaderThree from './Components/HeaderThree/HeaderThree'
import ProductHeader from './Components/ProductHeader/ProductHeader'
import FoodItem from './Components/FoodItems/FoodItem'
import Operation from './Components/oprations/Operation'
import Reviews from './Components/Reviews/Reviews'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import Payment from './Components/Payment/Payment'
import OrderSuccesFull from './Components/OrderSuccesFull/OrderSuccesFull'
import Profile from './Components/Profile/Profile'
import Modal from './Components/Modal/Modal'
import Signup from './Components/Signup/Signup'
import Authentication from './Pages/Authentication/Authentication'
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Checkoutpage from './Pages/CheckoutPage/Checkoutpage'
import Paymentpage from './Pages/PaymentPage/Paymentpage'
import Profilepage from './Pages/ProfilePage/Profilepage'
import Ordersuccessfull from './Pages/OrderSuccessfullPage/Ordersuccessfull'
import Signinpage from './Pages/Signinpage/Signinpage';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Pages/Profile/ProfilePage'
import Address from './Components/Address/Address';
import Addresspage from './Pages/Address/Addresspage'
import Addressmodal from './Components/AddressModal/Addressmodal'
import MapContainer from './Components/Map/MapContainers'
import MapContainers from './Components/Map/MapContainers'

function App() {
  return (
    <div>
      <Routes>
        {/* <Signin/>  */}
        {/* <Footer/> */}
        {/* <Navbar/> */}
        {/* <Header/> */}
        {/* <Header2/> */}
        {/* <Restourants/> */}
        {/* <HeaderThree/> */}
        {/* <ProductHeader/> */}
        {/* <FoodItem/> */}
        {/* <Operation/> */}
        {/* <Reviews/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Payment/> */}
        {/* <OrderSuccesFull/> */}
        {/* <Profile/> */}
        <Route path='/modal' element={<Addressmodal/>}/>
        {/* <Signup/> */}
        {/* <Authentication/> */}
        <Route path='/map' element={<MapContainers/>}/>
        <Route path='/' element={<Signinpage/>}/>
        <Route path='/signup' element={<Authentication/>}/>
        <Route path='/address' element={<Addresspage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/home' element={<Home/>}/>
        {/* <Product/> */}
        <Route path='/product' element={<Product/>}/>
        <Route path='/checkoutpage' element={<Checkoutpage />}/>
        {/* <Paymentpage/> */}
        <Route path='/payment' element={<Paymentpage/>}/>
        {/* <Profilepage/> */}
        {/* <Ordersuccessfull/> */}
        <Route path='/orderSuccessfull' element={<Ordersuccessfull/>}/>
        {/* <Signinpage/> */}
      </Routes>

    </div>
  )
}

export default App
