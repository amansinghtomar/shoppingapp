//React & other library 
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//Custom CSS 
import {
   ImageWrapper,
   Image,
   ProductContainer,
   ProductDetailContainer,
} from "./ProductDetailStyle";
//firebase
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
//Redux
import { addCartItems } from "../../redux/cartSlice";
//Custom Component
import Reviews from "./Reviews";
import { ProductHeader, ProductActions, ProductInfo } from "./ProductInfo";
import AlertBox from "../../components/Alert/Alert";


export default function ProductDetails() {
   const location = useLocation();
   const [product, setProduct] = useState({});
   const { posts } = useSelector((state) => state.post);
   const dispatch = useDispatch();
   const [alert, setAlert] = React.useState({
      visible: false,
      severity: "",
      message: "",
      open: false,
   });
   const timerRef = React.useRef(null);
   const updateTextAddToBag = location.state
   const router = useNavigate();

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

   const handleGoToCart = () => {
      console.log("handleGoToCart")
        router(`/cart`);
   }

   const handleAddToCart = () => {
      setAlert({
         visible: true,
         severity: "success",
         message: "Product added successfully",
         open: true,
      });
      timerRef.current = setTimeout(() => {
         setAlert({ visible: false, severity: "", message: "" });
      }, 2000);
      dispatch(addCartItems({ ...product, quantity: 10 }));
   };

   return (
      <>
      <AlertBox  visible={alert.visible} severity={alert.severity} message={alert.message} open={alert.open} />     
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
                     handleAddToCart={handleAddToCart}
                     updateTextAddToBag={updateTextAddToBag}
                     handleGoToCart={handleGoToCart}
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
