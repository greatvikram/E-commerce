import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const ElectronicsCard = ({ productItems, addToCart }) => {
  const filteredItems = productItems.filter((item) =>
    item.category.match(/electronics/gi)
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {filteredItems.map((productItems) => {
        productItems.category.match();
        return (
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <img src={productItems.image} alt="" />
                <div className="product-detail">
                  <Link to={`/products/${productItems.id}`}>
                    <span className="detail">More Details</span>
                  </Link>
                </div>
              </div>
              <div className="product-details">
                <h3>{productItems.title}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <span>{productItems.rating.rate} </span>
                  <span style={{color: "grey",fontSize:"80%"}}>({productItems.rating.count} reviews)</span>
                </div>
                <div className="price">
                  <h4>${productItems.price} </h4>
                  <button onClick={() => addToCart(productItems)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ElectronicsCard;
