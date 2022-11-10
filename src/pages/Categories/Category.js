import React from "react";
import { CategoryContainer } from "./CategoryStyles";
import CategoryFilter from "./CategoryFilter";
import CategoryProduct from "./CategoryProduct";

export default function Category() {
   return (
      <CategoryContainer>
         <CategoryFilter />
         <CategoryProduct />
      </CategoryContainer>
   );
}
