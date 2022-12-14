import React from 'react';
import { Container, Wrapper, Image } from './HomeStyles';
import image from '../../assets/banner.jpg';
import Category from '../../components/Category/Category';
import Typography from '../../components/Typography/Typography';
import { CategoryItem, Config, productItems } from './config';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/Card/ProductCard';

function Home() {
	const route = useNavigate();
	const navigate = (id) => {
		route(id);
	};

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
					{productItems &&
						productItems.map((data) => (
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
