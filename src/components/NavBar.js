import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h4 class="text-white">Select page</h4>
          <span class="text-muted">
            Routing implemented with React-router-dom
          </span>
          <li style={{ listStyle: "none" }}>
            <Link to="/">
              <h5>Higher-Lower</h5>
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to="/loveCalc">
              <h5>Love Calculator</h5>
            </Link>
          </li>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </nav>
    </div>
  );
};
export default NavBar;
