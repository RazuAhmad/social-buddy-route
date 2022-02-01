import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <Link to="/section">
        <button>Section</button>
      </Link>
    </div>
  );
};

export default Button;
