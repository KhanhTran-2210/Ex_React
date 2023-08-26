import React from "react";

export default function ModalShoe({ product, onCloseCard }) {
  if (!product) {
    return null;
  }
  return (
    <>
      <div style={{ display: "block" }} className="modal show" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-secondary-subtle">
              <h2 className="modal-title text-danger fw-bold">Infomation</h2>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCloseCard}
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6">
                  <img src={product.image} alt="" width="100%" height="100%" />
                </div>
                <div className="col-lg-6">
                  <h3 className="bg-dark text-light">{product.name}</h3>
                  <p className="text-success fw-bolder">Price: {product.price}</p>
                  <p>Short: {product.shortDescription}</p>
                  <p>Description: {product.description}</p>
                  <p className="fw-bold">Quantity: {product.quantity}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCloseCard}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}
