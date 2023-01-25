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
import { useSelector } from 'react-redux';

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
	const filteredCategory = useSelector((state) => state.product.categoryFilter);
	const filteredPrice = useSelector((state) => state.product.priceFilter);

	console.log(filteredCategory);

	const generateQuery = (collRef, filteredCategory) => {
		let q;
		if (filteredCategory.length > 0) {
			q = query(
				collRef,
				//where('category', '==', id),
				where('category', 'in', filteredCategory)
			);
		} else {
			q = query(collRef, where('category', '==', ''));
		}
		return q;
	};
	useEffect(() => {
		const collRef = collection(db, 'Posts');

		const productRef = onSnapshot(
			generateQuery(collRef, filteredCategory),
			(querySnapshot) => {
				const data = querySnapshot.docs.map((query) => query.data());
				setProducts(data);
			}
		);

		return () => {
			productRef();
		};
	}, [filteredCategory]);

	const handleClick = (id) => {
		router(`/product/${id}`);
	};

	//console.log(Products);
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
