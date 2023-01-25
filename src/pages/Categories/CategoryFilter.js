import { Checkbox, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	handleCategoryFilter,
	handlePriceFilter,
} from '../../redux/userPostSlice';
import {
	CategoryFilterContainer,
	CheckboxContainer,
	CheckboxWrapper,
} from './CategoryStyles';
import { CategoryList } from './mockData';

function CategoryFilter() {
	const [categoryItem, setCategoryItem] = useState(CategoryList);
	const filteredCategory = useSelector((state) => state.product.categoryFilter);
	const filteredPrice = useSelector((state) => state.product.priceFilter);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		const newCategoryItem = JSON.parse(JSON.stringify(categoryItem));
		newCategoryItem[0].items.find((item) => {
			if (item.name === id) item.checked = true;
		});
		//console.log(categoryItem);
		setCategoryItem(newCategoryItem);
	}, []);

	const handleCategory = (label, name, checked) => {
		switch (label) {
			case 'Category': {
				let newFilterCategory = [...filteredCategory];
				if (checked) {
					newFilterCategory.push(name);
				} else {
					newFilterCategory = newFilterCategory.filter((item) => {
						return name != item;
					});
				}
				dispatch(handleCategoryFilter(newFilterCategory));
				break;
			}
			case 'Price': {
				let newFilteredPrice = [...filteredPrice];
				if (checked) {
					newFilteredPrice.push(name);
				} else {
					newFilteredPrice = newFilteredPrice.filter((item) => {
						return name != item;
					});
				}
				dispatch(handlePriceFilter(newFilteredPrice));
				break;
			}
			default:
				break;
		}
	};

	console.log(categoryItem);

	return (
		<CategoryFilterContainer>
			{categoryItem.map(({ id, label, items }) => (
				<CheckboxContainer key={id}>
					<Typography variant="h6">{label}</Typography>
					{items.map((category) => (
						<CheckboxWrapper key={category.id}>
							<Checkbox
								size="small"
								value={category.name}
								//defaultChecked={category.checked}
								checked={category.checked}
								onChange={(event) =>
									handleCategory(
										label,
										event.target.value,
										event.target.checked
									)
								}
							/>
							<Typography variant="p">{category.name}</Typography>
						</CheckboxWrapper>
					))}
				</CheckboxContainer>
			))}
		</CategoryFilterContainer>
	);
}

export default CategoryFilter;
