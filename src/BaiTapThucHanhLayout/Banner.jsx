import React from "react";

export default function Banner() {
  return (
    <div className="container px-5 mt-5">
      <div className="text-center p-5 m-5 bg-light rounded-3">
        <div className="m-5">
          <h1 className="fs-1 fw-bold">A warm welcome!</h1>
          <p className="fs-3">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <button className="btn btn-primary fs-4">Call to action</button>
        </div>
      </div>
    </div>
  );
}
