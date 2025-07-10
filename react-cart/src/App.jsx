
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import MyOrders from './pages/MyOrders';
import Cart from './pages/cart';
import './App.css';
import Header from './layouts/Header';
import { useContext } from 'react';
import {AppContext} from './context/AppContext';

const App = () => {
  const { isSeller } = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes('seller');

  return (
    <>
      {isSellerPath ? null : <Header/>}
     
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/my-orders" element={<MyOrders />} />
          </Routes>
      </div>
      

    </>
  )
}

export default App;
