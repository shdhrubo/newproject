import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  const { addToCartHandle } = props;
  const { name, price, img, ratings, seller } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <h6 className="product-name"> {name}</h6>
      <div className="product-info">
        <p>Price:$ {price}</p>
        <p>
          <small>Seller:{seller}</small>
        </p>
        <p>
          <small>Rating: {ratings}</small>
        </p>
      </div>
      <button
        onClick={() => addToCartHandle(props.product)}
        className="btn-cart"
      >
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
