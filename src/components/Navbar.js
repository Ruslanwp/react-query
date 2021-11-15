import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/people" className="button">
        People
      </Link>
      <Link to="/planets" className="button">
        Planets
      </Link>
    </nav>
  );
};

export default Navbar;
