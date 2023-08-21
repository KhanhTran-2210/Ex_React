import React from "react";
import "./GlassItem.css";

export default function GlassItem({ product }) {
 
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card glassModel mt-5 " style={{ width: "290px" }}>
          <img
            src="./glassesImage/model.jpg"
            className="card-img-top"
            alt="..."
            height="60%"
          />
          <div className="glassProduct">
            {product && (
              <img src={product.url} alt="" width="40%" height="12%" />
            )}
          </div>
          <div className="card-body bg-info-subtle">
            <p className="card-text">Name: {product ? product.name: ""}</p>
            <p className="card-text">Price: {product ? product.price: ""}</p>
            <p className="card-text">Desc: {product ? product.desc: ""}</p>
          </div>
        </div>
      </div>
    </>
  );
}
