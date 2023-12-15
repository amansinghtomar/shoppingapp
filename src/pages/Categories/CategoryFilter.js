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
		newCategoryItem[0].items.forEach((item) => {
			if (item.name === id) item.checked = true;
		});
		setCategoryItem(newCategoryItem);
	}, []);

	const getMinMaxValue = (newCategoryItem, filteredPrice) => {
		let newFilteredPrice = {};
		const checkedCategory = newCategoryItem[1].items.filter(
			(item) => item.checked
		);

		checkedCategory.forEach((item) => {
			if (Object.keys(filteredPrice).length === 0) {
				newFilteredPrice.minValue = item.value.minValue;
				newFilteredPrice.maxValue = item.value.maxValue;
			}
			if (item.value.minValue < newFilteredPrice.minValue)
				newFilteredPrice.minValue = item.value.minValue;
			if (item.value.maxValue > newFilteredPrice.maxValue)
				newFilteredPrice.maxValue = item.value.maxValue;
		});
		return newFilteredPrice;
	};

	const handleCategory = (label, name, checked) => {
		let newCategoryItem = JSON.parse(JSON.stringify(categoryItem));
		switch (label) {
			case 'Category': {
				let newFilterCategory = [...filteredCategory];
				if (checked) {
					newCategoryItem[0].items.forEach((item) => {
						if (item.name === name) item.checked = true;
					});
					newFilterCategory.push(name);
				} else {
					newCategoryItem[0].items.forEach((item) => {
						if (item.name === name) item.checked = false;
					});
					newFilterCategory = newFilterCategory.filter((item) => {
						return name != item;
					});
				}
				setCategoryItem(newCategoryItem);
				dispatch(handleCategoryFilter(newFilterCategory));
				break;
			}
			case 'Price': {
				if (checked) {
					newCategoryItem[1].items.forEach((item) => {
						if (item.name === name) item.checked = true;
					});
				} else {
					newCategoryItem[1].items.forEach((item) => {
						if (item.name === name) item.checked = false;
					});
				}
				const newFilteredPrice = getMinMaxValue(newCategoryItem, filteredPrice);
				setCategoryItem(newCategoryItem);
				dispatch(handlePriceFilter(newFilteredPrice));
				break;
			}
			default:
				break;
		}
	};

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
