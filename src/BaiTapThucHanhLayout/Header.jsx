import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-lg-5">
          <a href="#" className="navbar-brand fs-3">Bài tập 1</a>
        <div className="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
}
