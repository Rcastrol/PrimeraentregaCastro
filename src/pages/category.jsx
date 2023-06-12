import React from "react";
import ItemListContainer from "C:\Users\HP\Desktop\Proyect react\ecomerce\src/components/ItemListContainer";
import { ProductsData } from "../json/Products";
import { useParams } from "react-router-dom";
const Category = () => {
  const {categoryId} = useParams()

  const productsFilteredByCategory = ProductsData.filter(products => products.category === categoryId);

  return <ItemListContainer productsData={productsFilteredByCategory} />;
};

export default Category;