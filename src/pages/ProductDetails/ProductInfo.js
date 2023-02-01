import React from 'react';
import { Button } from '../../components/Button/Button';
import Rating from '@mui/material/Rating';
import ShareIcon from '@mui/icons-material/Share';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Typography from '../../components/Typography/Typography';
import {
	ProductTitleConatainer,
	RatingContainer,
	PriceContainer,
	ButtonContainer,
	DeliveryContainer,
	ProductDetailHeadingContainer,
} from './ProductDetailStyle';
import { Divider } from '@mui/material';

export const ProductHeader = ({ productName, review, star }) => (
	<>
		<ProductTitleConatainer>
			<Typography as="h1" fontWeight="600">
				{productName}
			</Typography>
			<ShareIcon>Share</ShareIcon>
		</ProductTitleConatainer>
		<RatingContainer>
			<Typography>{`${review && review.length} Reviews`}</Typography>

			<Rating
				name="half-rating-read"
				precision={star}
				defaultValue={star}
				readOnly
			/>
		</RatingContainer>
	</>
);

export const ProductActions = ({
	productPrice,
	TotalMRP,
	productDiscount,
	handleAddToCart,
	updateTextAddToBag,
	handleGoToCart,
	handleWishlist,
}) => (
	<>
		<PriceContainer>
			<Typography as="h2" fontWeight="600">{`$ ${productPrice}`}</Typography>
			<Typography as="h2" fontWeight="600">
				<s>{`MRP ${TotalMRP}`}</s>
			</Typography>
			<Typography
				as="h3"
				color="primary"
			>{`${productDiscount}% OFF`}</Typography>
		</PriceContainer>
		<Typography
			fontWeight="100"
			color="primary"
		>{`Inclusive of all taxes`}</Typography>

		<ButtonContainer>
			{updateTextAddToBag === null ? (
				<Button
					width="135px"
					height="41px"
					borderRadius="5px"
					fontSize="large"
					onClick={() => handleAddToCart('Go to Bag')}
				>
					Add to Bag
				</Button>
			) : (
				<Button
					width="135px"
					height="41px"
					borderRadius="5px"
					fontSize="large"
					onClick={() => handleGoToCart('Go to Bag')}
				>
					Go to Bag
				</Button>
			)}

			<Button
				width="135px"
				height="41px"
				border-radius="5px"
				onClick={handleWishlist}
			>
				Whishlist
			</Button>
		</ButtonContainer>
	</>
);

export const ProductInfo = ({
	DeliveryDate,
	SellerName,
	productDetail,
	review,
}) => (
	<>
		<DeliveryContainer>
			<LocalShippingIcon style={{ color: 'dimgray' }}></LocalShippingIcon>
			<Typography>{`Deliver By : ${DeliveryDate}`}</Typography>
		</DeliveryContainer>

		<Typography>{`Seller : ${SellerName}`}</Typography>

		<Divider sx={{ marginTop: '10px' }} />
		<ProductDetailHeadingContainer>
			<TextSnippetIcon style={{ color: 'dimgray' }}></TextSnippetIcon>
			<Typography as="h4" fontWeight="700">
				PRODUCT DETAILS
			</Typography>
		</ProductDetailHeadingContainer>
		<Typography gutterBottom="20">{productDetail}</Typography>

		<Typography color="primary">100% original and handmade product</Typography>

		<Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />

		<Typography as="h5" fontWeight="600">{`Customer Reviews (${
			review && review.length
		})`}</Typography>
	</>
);
