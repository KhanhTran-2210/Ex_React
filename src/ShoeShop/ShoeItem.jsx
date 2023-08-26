import React from "react";
import ModalShoe from "./ModalShoe";

export default function ShoeItem({ product, onGetProduct }) {
  
  return (
    <div className="card m-3">
      <div className="card-img">
        <img src={product.image} alt="" width="100%" height="100%" />
      </div>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        <button
          className="btn btn-dark"
          onClick={()=>onGetProduct(product)}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
