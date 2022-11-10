import Category from "../../components/Category/Category";
import ProductCard from "../../components/Card/ProductCard";
import { Category1, Category2 } from "../../assets/Categories";
import {
   Painting1,
   Painting2,
   Painting3,
   Painting4,
   Painting5,
   Painting6,
   Painting7,
} from "../../assets/Paintings";

export const Config = [
   {
      id: 1,
      name: "Category",
      Component: Category,
      items: [
         {
            image: Painting7,
            name: "Painting",
         },
         {
            image: Category1,
            name: "Crafting",
         },
         {
            image: Category2,
            name: "Gifts",
         },
      ],
   },
   {
      id: 2,
      name: "Top Products",
      Component: ProductCard,
      items: [
         {
            image: Painting1,
            productPrice: 539,
            TotalMRP: 599,
            productDiscount: 10,
         },
         {
            image: Painting2,
            productPrice: 539,
            TotalMRP: 599,
            productDiscount: 10,
         },
         {
            image: Painting3,
            productPrice: 539,
            TotalMRP: 599,
            productDiscount: 10,
         },
         {
            image: Painting4,
            productPrice: 539,
            TotalMRP: 599,
            productDiscount: 10,
         },
         {
            image: Painting5,
            productPrice: 539,
            TotalMRP: 599,
            productDiscount: 10,
         },
         {
            image: Painting6,
            productPrice: 539,
            TotalMRP: 599,
            productDiscount: 10,
         },
         {
            image: Painting7,
            productPrice: 539,
            TotalMRP: 599,
            productDiscount: 10,
         },
      ],
   },
];
