import React from "react";

import { FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Baset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
