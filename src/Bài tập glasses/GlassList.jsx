import React from "react";

export default function GlassList({ onChangeGlass, products }) {
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 pb-3">
      {products.map((product) => (
        <div key={product.id}>
          <button onClick={() => onChangeGlass(product.id)}>
            <img src={product.urlJPG} alt="product" width="120px" height="100px" />
          </button>
        </div>
      ))}
    </div>
  );
}
