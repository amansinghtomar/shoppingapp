import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
   ImageWrapper,
   Image,
   ProductContainer,
   ProductDetailContainer,
} from "./ProductDetailStyle";
import Reviews from "./Reviews";
import { ProductHeader, ProductActions, ProductInfo } from "./ProductInfo";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";

export default function ProductDetails() {
   const location = useLocation();
   const [product, setProduct] = useState({});
   const { posts } = useSelector((state) => state.post);

   useEffect(() => {
      const { pathname } = location;
      const id = pathname.split("/")[2];
      const newproduct = posts.length > 0 && posts.find((post) => post.id === id);
      if (newproduct) {
         setProduct(newproduct);
      } else {
         getData(id);
      }
   }, []);

   const getData = async (id) => {
      const collRef = collection(db, "Posts");
      const response = query(collRef, where("id", "==", id));
      const querySnapshot = await getDocs(response);
      querySnapshot.forEach((doc) => {
         console.log("doc", doc.data());
         setProduct(doc.data());
      });
   };

   return (
      <>
         {Object.keys(product).length > 0 && (
            <ProductContainer>
               <ImageWrapper>
                  <Image src={product.image}></Image>
               </ImageWrapper>

               <ProductDetailContainer>
                  <ProductHeader
                     productName={product.productName}
                     review={product.review}
                     star={product.star}
                  />

                  <ProductActions
                     productPrice={product.productPrice}
                     TotalMRP={product.TotalMRP}
                     productDiscount={product.productDiscount}
                  />

                  <ProductInfo
                     DeliveryDate={product.DeliveryDate}
                     SellerName={product.SellerName}
                     productDetail={product.productDetail}
                     review={product.review}
                  />

                  {product.review &&
                     product.review.length !== 0 &&
                     product.review.map((review) => {
                        return <Reviews key={review.id} review={review} />;
                     })}
               </ProductDetailContainer>
            </ProductContainer>
         )}
      </>
   );
}
