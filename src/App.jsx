import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <Searchbar />
      <Routes>
       < Route path='/' element = {<Home />} />
       < Route path='/about' element = {<About />} />
       < Route path='/cart' element = {<Cart />} />
       < Route path='/contact' element = {<Contact />} />
       < Route path='/collection' element = {<Collection />} />
       < Route path='/products/:productId' element = {<Product />} />
       < Route path='/login' element = {<Login />} />
       < Route path='/orders' element = {<Orders />} />
       < Route path='/placeorder' element = {<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
