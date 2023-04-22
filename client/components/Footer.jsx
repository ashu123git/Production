import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 text-muted align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
          </Link>
          <span className="text-muted">© 2023 Eat24, Inc</span>
          <p className="mb-0">Created by Ashutosh Choubey</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
