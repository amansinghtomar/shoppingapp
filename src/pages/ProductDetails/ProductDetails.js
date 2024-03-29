//React & other library
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//Custom CSS
import {
	ImageWrapper,
	Image,
	ProductContainer,
	ProductDetailContainer,
} from './ProductDetailStyle';
//firebase
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
//Redux
import { addCartItems } from '../../redux/cartSlice';
//Custom Component
import Reviews from './Reviews';
import { ProductHeader, ProductActions, ProductInfo } from './ProductInfo';
import AlertBox from '../../components/Alert/Alert';
import { addWishlistItems } from '../../redux/wishlistSlice';

export default function ProductDetails() {
	const location = useLocation();
	const [product, setProduct] = useState({});
	const { products } = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const [isProductInCart, setIsProductInCart] = useState(false);
	const router = useNavigate();
	const cartItems = useSelector((state) => state.cart.cartItems);
	//const wishlistItem = useSelector((state) => state.wishlist.wishlistItems);

	useEffect(() => {
		const { pathname } = location;
		const id = pathname.split('/')[2];
		const product = cartItems.find((item) => item.id === id);
		if (product) setIsProductInCart(true);
		const newproduct =
			products.length > 0 && products.find((post) => post.id === id);
		if (newproduct) {
			setProduct(newproduct);
		} else {
			getData(id);
		}
	}, []);

	useEffect(() => {
		const { pathname } = location;
		const id = pathname.split('/')[2];
		const product = cartItems.find((item) => item.id === id);
		if (product) setIsProductInCart(true);
	}, [cartItems]);

	const getData = async (id) => {
		const collRef = collection(db, 'Posts');
		const response = query(collRef, where('id', '==', id));
		const querySnapshot = await getDocs(response);
		querySnapshot.forEach((doc) => {
			console.log('doc', doc.data());
			setProduct(doc.data());
		});
	};

	const handleGoToCart = () => {
		console.log('handleGoToCart');
		router(`/cart`);
	};

	const handleAddToCart = () => {
		// setAlert({
		// 	visible: true,
		// 	severity: 'success',
		// 	message: 'Product added successfully',
		// 	open: true,
		// });
		// timerRef.current = setTimeout(() => {
		// 	setAlert({ visible: false, severity: '', message: '' });
		// }, 2000);

		dispatch(addCartItems({ ...product, quantity: 1 }));
	};

	const handleWishList1 = () => {
		console.log('handleWishlist');
		dispatch(addWishlistItems(product));
	};

	return (
		<>
			<AlertBox
				visible={alert.visible}
				severity={alert.severity}
				message={alert.message}
				open={alert.open}
			/>
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
							updateTextAddToBag={isProductInCart}
							handleGoToCart={handleGoToCart}
							handleWishlist={handleWishList1}
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
