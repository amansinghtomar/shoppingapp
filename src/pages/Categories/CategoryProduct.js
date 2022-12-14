import React from 'react';
import {
	ProductList,
	CategoryProductContainer,
	TopProductContainer,
} from './CategoryStyles';
import Dropdown from '../../components/MenuItem/Dropdown';
import ProductCard from '../../components/Card/ProductCard';
import { ProductItems } from './mockData';
import Typography from '../../components/Typography/Typography';
import { useNavigate, useRoutes } from 'react-router-dom';

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
				{ProductItems &&
					ProductItems.map((item) => (
						<ProductCard id={item.id} {...item} cardClick={handleClick} />
					))}
			</ProductList>
		</CategoryProductContainer>
	);
}

export default CategoryProduct;
