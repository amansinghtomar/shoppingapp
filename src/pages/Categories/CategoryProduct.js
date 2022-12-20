import React, { useEffect, useState } from 'react';
import {
	ProductList,
	CategoryProductContainer,
	TopProductContainer,
} from './CategoryStyles';
import Dropdown from '../../components/MenuItem/Dropdown';
import ProductCard from '../../components/Card/ProductCard';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

const options = [
	{
		id: 1,
		value: 'Newest',
	},
	{
		id: 2,
		value: 'Older',
	},
];

function CategoryProduct() {
	const router = useNavigate();
	const [Products, setProducts] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const collRef = collection(db, 'Posts');
		const q = query(collRef, where('category', '==', id));
		const productRef = onSnapshot(q, (querySnapshot) => {
			const data = querySnapshot.docs.map((query) => query.data());
			console.log('data', data);
			setProducts(...Products, data);
		});

		return () => {
			productRef();
		};
	}, []);

	const handleClick = (id) => {
		router(`/product/${id}`);
	};
	return (
		<CategoryProductContainer>
			<TopProductContainer>
				<Dropdown
					options={options}
					selectedValue="Newest"
					handleUpdateItem={() => {}}
					size="large"
				/>
			</TopProductContainer>
			<ProductList>
				{Products &&
					Products.map((item) => (
						<ProductCard key={item.id} {...item} cardClick={handleClick} />
					))}
			</ProductList>
		</CategoryProductContainer>
	);
}

export default CategoryProduct;
