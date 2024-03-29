import React, { useEffect, useState } from 'react';
import {
	ProductList,
	CategoryProductContainer,
	TopProductContainer,
} from './CategoryStyles';
import Dropdown from '../../components/MenuItem/Dropdown';
import ProductCard from '../../components/Card/ProductCard';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { useSelector } from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';

const options = [
	{
		id: 1,
		value: 'High to Low',
	},
	{
		id: 2,
		value: 'Low to High',
	},
];

function CategoryProduct() {
	const router = useNavigate();
	const [Products, setProducts] = useState([]);
	const filteredCategory = useSelector((state) => state.product.categoryFilter);
	const filteredPrice = useSelector((state) => state.product.priceFilter);
	const [filterValue, setFilterValue] = useState('High to Low');
	const [currentPage, setCurrentPage] = useState(1);
	const PAGE_SIZE = 1;

	useEffect(() => {
		const collRef = collection(db, 'Posts');

		const query = generateQuery(collRef, filteredCategory, filteredPrice);
		getDocs(query).then((querySnapshot) => {
			let finaldata = [];
			querySnapshot.forEach((doc) => {
				finaldata.push(doc.data());
			});
			console.log(finaldata);
			setProducts(sortProducts(finaldata));
		});
	}, [filteredCategory, filteredPrice]);

	const onPageChange = (value) => {
		setCurrentPage(value);
	};

	const sortProducts = (products) => {
		const sortedProducts = products.sort((r1, r2) =>
			r2.productPrice > r1.productPrice
				? 1
				: r2.productPrice < r1.productPrice
				? -1
				: 0
		);
		return sortedProducts;
	};

	const sortDescProducts = (products) => {
		const sortedProducts = products.sort((r1, r2) =>
			r2.productPrice > r1.productPrice
				? -1
				: r2.productPrice < r1.productPrice
				? 1
				: 0
		);
		return sortedProducts;
	};

	const generateQuery = (collRef, filteredCategory, filteredPrice) => {
		let q;
		if (
			filteredCategory.length > 0 &&
			Object.keys(filteredPrice).length === 0
		) {
			q = query(collRef, where('category', 'in', filteredCategory));
		} else if (
			filteredCategory.length > 0 &&
			Object.keys(filteredPrice).length > 0
		) {
			q = query(
				collRef,
				where('category', 'in', filteredCategory),
				where('productPrice', '>=', filteredPrice.minValue),
				where('productPrice', '<=', filteredPrice.maxValue)
			);
		} else {
			q = query(collRef, where('category', '==', ''));
		}
		return q;
	};

	const handleFilterValue = (value) => {
		let products;
		if (value === 'Low to High') {
			products = sortDescProducts(Products);
		} else {
			products = sortProducts(Products);
		}
		setProducts(products);
		setFilterValue(value);
	};

	const handleClick = (id) => {
		router(`/product/${id}`);
	};

	console.log(Math.round(Products.length / PAGE_SIZE), Products);

	return (
		<CategoryProductContainer>
			<TopProductContainer>
				<Dropdown
					options={options}
					selectedValue={filterValue}
					handleUpdateItem={handleFilterValue}
					size="large"
				/>
			</TopProductContainer>
			<ProductList>
				{Products.length > 0 &&
					Products.slice(
						currentPage * PAGE_SIZE,
						currentPage * PAGE_SIZE + PAGE_SIZE
					).map((item) => (
						<ProductCard key={item.id} {...item} cardClick={handleClick} />
					))}
			</ProductList>
			{Products.length > 0 && (
				<Pagination
					totalPage={Math.ceil(Products.length / PAGE_SIZE)}
					currentPage={currentPage}
					onPageChange={onPageChange}
				/>
			)}
		</CategoryProductContainer>
	);
}

export default CategoryProduct;
