import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import Rating from "@mui/material/Rating";
import ShareIcon from "@mui/icons-material/Share";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import StarIcon from "@mui/icons-material/Star";
import Typography from "../../components/Typography/Typography";

import {
	ImageWrapper,
	Image,
	ProductContainer,
	ProductDetailContainer,
	ProductTitleConatainer,
	ProductName,
	RatingContainer,
	RatingCount,
	PriceContainer,
	Price,
	MRP,
	Discount,
	Tax,
	ButtonContainer,
	DeliveryDate,
	SellerName,
	DeliveryContainer,
	ProductDetailHeading,
	ProductDetail,
	ProductDetailHeadingContainer,
	HandmadeProduct,
	CustomerReviews,
	ReviewContainer,
	ProductReviewDeatils,
	ReviewerName,
	Star,

} from "./ProductDetailStyle";

export default function ProductDetails() {
	const location = useLocation();

	return (
		<>
			<ProductContainer>
				<ImageWrapper>
					<Image src={location.state.image}></Image>
				</ImageWrapper>

				<ProductDetailContainer>
          <ProductTitleConatainer>
             <Typography as="h1" fontWeight="600">
         {location.state.productName}
        </Typography>
						<ProductName>{location.state.productName}</ProductName>
						<ShareIcon>Share</ShareIcon>
					</ProductTitleConatainer>

					<RatingContainer>
						<RatingCount>
							{`${location.state.review && location.state.review.length} Reviews`}{" "}
						</RatingCount>
						<Rating
							name="half-rating-read"
							defaultValue={2.5}
							precision={location.state.star}
							readOnly
						/>
					</RatingContainer>

					<PriceContainer>
						<Price>{`$ ${location.state.productPrice}`}</Price>
						<MRP>
							<s>{`MRP ${location.state.TotalMRP}`}</s>
						</MRP>
						<Discount>{`${location.state.productDiscount}% OFF`}</Discount>
					</PriceContainer>

					<Tax>{`Inclusive of all taxes`}</Tax>

					<ButtonContainer>
						<Button width="135px" height="41px" borderRadius="5px">
							Add To Bag
						</Button>
						<Button width="135px" height="41px" border-radius="5px">
	
							Whishlist
						</Button>
					</ButtonContainer>

					<DeliveryContainer>
						<LocalShippingIcon style={{ color: "dimgray" }}></LocalShippingIcon>
						<DeliveryDate>{`Deliver By : ${location.state.DeliveryDate}`}</DeliveryDate>
					</DeliveryContainer>

          <SellerName>{`Seller : ${location.state.SellerName}`}</SellerName>
          
					<ProductDetailHeadingContainer>
						<TextSnippetIcon style={{ color: "dimgray" }}></TextSnippetIcon>
						<ProductDetailHeading>PRODUCT DETAILS </ProductDetailHeading>
					</ProductDetailHeadingContainer>
					<ProductDetail>{location.state.productDetail}</ProductDetail>
					<HandmadeProduct>100% original and handmade product</HandmadeProduct>

					<CustomerReviews>{`Customer Reviews (${
						location.state.review && location.state.review.length
					})`}</CustomerReviews>
					{location.state.review &&
						location.state.review.length !== 0 &&
						location.state.review.map((review) => {
							return (
								<>
									<ReviewContainer>
										<StarIcon
											style={{ color: "goldenrod", fontSize: "16px", marginTop: "4px" }}
										></StarIcon>
										<Star>{review.star}</Star>

										<ProductReviewDeatils>{review.comment}</ProductReviewDeatils>
									</ReviewContainer>
									<ReviewerName>{review.name}</ReviewerName>
								</>
							);
						})}
				</ProductDetailContainer>
			</ProductContainer>
		</>
	);
}
