import React from "react";
import ItemListContainer from "C:\Users\HP\Desktop\Proyect react\ecomerce\src/components/ItemListContainer";
import { ProductsData } from "../json/Products";

const Home = () => {
  return (
    <div>
      <ItemListContainer productsData={ProductsData} />
    </div>
  );
};

export default Home;