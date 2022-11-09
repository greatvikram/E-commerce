import React from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail({ productItems, addToCart }) {
  const { productId } = useParams();
  const product = productItems.find((prod) => prod.id == productId);
  console.log(productId, product, productItems);
  return (
    <>
      <div className="single-product-detail">
        <div className="product">
          <div className="img">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="product">
          <div className="product-details m_flex">
            <h3>{product.title}</h3>
            <p>Category : {product.category}</p>
            <p>{product.description}</p>
            <div className="product_color f_flex">
              <span>Select Color :</span>
              <ul className="f_flex">
                <li style={{ background: "#e54e5d" }}></li>
                <li style={{ background: "#252525" }}></li>
                <li style={{ background: "#60b3f3" }}></li>
              </ul>
            </div>
            <div className="delivery">
              <span>
                <i className="fas fa-truck"></i>
              </span>
              <span>free delivery</span>
            </div>
            <div className="rate">
              <i className="fa fa-star"></i>
              <span>{product.rating.rate} </span>
              <span style={{ color: "grey", fontSize: "80%" }}>
                ({product.rating.count} reviews)
              </span>
            </div>

            <div className="price">
              <h4>${product.price} </h4>
              {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
              <button onClick={() => addToCart(product)}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
