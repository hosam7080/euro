import React from "react";
import ProductsCard from "../components/Productscard";

function Home() {
  return (
    <div>
      <h1 className="text-center my-4">Welcome to Our Store</h1>
      <ProductsCard /> 
    </div>
  );
}

export default Home;
