import React from "react";
import "../styles/Home.css";
import bkimage from "../assets/pizza.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bkimage})` }}>
      <div className="headerContainer">
        <h1>Pizzarea</h1>
        <p> NEWYORK PIZZA STYLE </p>
        <Link to="/menu">
          {" "}
          <button> ORDER NOW </button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
