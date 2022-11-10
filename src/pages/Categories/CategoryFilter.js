import { Checkbox, Typography } from "@mui/material";
import React from "react";
import { CategoryFilterContainer, CheckboxContainer, CheckboxWrapper } from "./CategoryStyles";
import { CategoryList } from "./mockData";

function CategoryFilter() {
   return (
      <CategoryFilterContainer>
         {CategoryList.map(({ id, label, items }) => (
            <CheckboxContainer key={id}>
               <Typography variant="h6">{label}</Typography>
               {items.map((category) => (
                  <CheckboxWrapper key={category.id}>
                     <Checkbox size="small" value={category.name} />
                     <Typography variant="p">{category.name}</Typography>
                  </CheckboxWrapper>
               ))}
            </CheckboxContainer>
         ))}
      </CategoryFilterContainer>
   );
}

export default CategoryFilter;
