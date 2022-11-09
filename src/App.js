import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Cart from "./common/cart/Cart"
import Pages from "./pages/Pages"
import Products from './components/products/Products';
import ProductDetail from "./components/productDetail/ProductDetail"

function App() {
  // Data of products
  const [productData,setProductData] = useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
      .then(response=>{
        if(!response.ok){
          throw Error("could not fetch the data")
        }
        return response.json()
      })
      .then(data=>setProductData(data))
      .catch((error) => {
        console.log(error.message)
      })
    },[])

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  const removeFromCart = (product) => {
    setCartItem(CartItem.filter((item) => item.id !== product.id))
  }

  return (
    <div className='container'>
      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route exact path="/" element={<Pages productItems={productData} addToCart={addToCart} />}/>
          <Route exact path="/products" element={<Products productItems={productData} addToCart={addToCart} />}/>
          <Route exact path="/products/:productId" element={<ProductDetail productItems={productData} addToCart={addToCart} />}/>
          <Route exact path="/cart" element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeFromCart={removeFromCart} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
