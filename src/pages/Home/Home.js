import React, { useEffect, useState } from 'react';
import { Container, Wrapper, Image } from './HomeStyles';
import image from '../../assets/banner.jpg';
import Category from '../../components/Category/Category';
import Typography from '../../components/Typography/Typography';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/Card/ProductCard';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

function Home() {
	const route = useNavigate();
	//const dispatch = useDispatch();
	const [CategoryItem, setCategoryItem] = useState([]);
	const [Product, setProducts] = useState([]);

	useEffect(() => {
		const collRef = collection(db, 'Posts');
		const CategoryCollection = collection(db, 'Category');
		const snapRef = onSnapshot(collRef, (querySnapshot) => {
			const data = querySnapshot.docs.map((query) => query.data());
			setProducts(...Product, data);
		});
		const categoryRef = onSnapshot(CategoryCollection, (querySnapshot) => {
			const data = querySnapshot.docs.map((query) => query.data());
			setCategoryItem(...CategoryItem, data);
		});
		return () => {
			snapRef();
			categoryRef();
		};
	}, []);

	return (
		<>
			<Image alt="background Image" src={image} />
			<Container>
				<Typography variant="h1" align="center">
					Category
				</Typography>
				<Wrapper>
					{CategoryItem &&
						CategoryItem.map((data) => (
							<Category
								key={data.id}
								{...data}
								categoryClick={(id) => route(`category/${id}`)}
							/>
						))}
				</Wrapper>
			</Container>

			<Container>
				<Typography variant="h1" align="center">
					Top Products
				</Typography>
				<Wrapper>
					{Product &&
						Product.map((data) => (
							<ProductCard
								key={data.id}
								{...data}
								cardClick={(id) => route(`product/${id}`)}
							/>
						))}
				</Wrapper>
			</Container>
		</>
	);
}

export default Home;
