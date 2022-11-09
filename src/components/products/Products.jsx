import React from "react";
import MensClothCard from "./MensClothCard";
import WomensClothCard from "./WomensClothCard";
import JewelleryCard from "./JewelleryCard";
import ElectronicsCard from "./ElectronicsCard";
import "./product.css"

const Products = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="Product" id="products">
        <div className="container">
          <br />
          <div className="heading f_flex">
            <i class="fa fa-shield fa-rotate-270"></i>
            <h1>All Products</h1>
          </div>
          <br />
          <div className="heading f_flex">
            <i class="fa fa-arrow-right"></i>
            <h3>Men's Fashion</h3>
          </div>
          <MensClothCard productItems={productItems} addToCart={addToCart} />
          <div className="heading f_flex">
            <i class="fa fa-arrow-right"></i>
            <h3>Women's Fashion</h3>
          </div>
          <WomensClothCard productItems={productItems} addToCart={addToCart} />
          <div className="heading f_flex">
            <i class="fa fa-arrow-right"></i>
            <h3>Electronics</h3>
          </div>
          <ElectronicsCard productItems={productItems} addToCart={addToCart} />
          <div className="heading f_flex">
            <i class="fa fa-arrow-right"></i>
            <h3>Jewellery</h3>
          </div>
          <JewelleryCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default Products;
