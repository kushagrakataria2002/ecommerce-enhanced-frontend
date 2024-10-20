import React from 'react'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Header from "./components/Header/Header.jsx"; 
import Home from "./pages/Home/Home.jsx"; 
import Cart from "./pages/Cart/Cart.jsx"; 
import Footer from "./components/Footer/Footer.jsx"; 
import ProductDetails from './pages/Product Details/ProductDetails.jsx';

const App = () => {
  return (
    <Router>

      <Header/>

    <Routes>

    <Route path='/' element={<Home/>}/>

    <Route path='/product/:id' element={<ProductDetails/>}/>

    <Route path='/cart' element={<Cart/>}/>

    </Routes>

    <Footer/>

    </Router>
  )
}

export default App