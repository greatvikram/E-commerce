import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import Products from "../components/products/Products"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"

const Pages = ({ productItems, addToCart }) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate id="first"/>
      <Products productItems={productItems} addToCart={addToCart}/>
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages