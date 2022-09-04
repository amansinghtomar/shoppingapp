import styled from "styled-components";

export const ProductContainer = styled.div`
	display: flex;
	margin: 40px;
`;

export const ImageWrapper = styled.div`
	width: 50%;
	height: 50%;
`;
export const Image = styled.img`
	width: 77%;
	height: 50%;
	margin-left: 33px;
`;

export const ProductDetailContainer = styled.div`
	width: 50%;
	height: 50%;
`;
export const ProductTitleConatainer = styled.div`
	display: flex;
	justify-content: space-between;
    align-items:center ;
	margin-bottom: 14px;
`;
export const ProductName = styled.div`
	font-weight: bolder;
	font-size: 31px;
`;
export const RatingContainer = styled.div`
	display: flex;
	padding-bottom: 16px;
	border-bottom: 1px solid lightgrey;
`;
export const RatingCount = styled.div`
	margin-right: 34px;
`;

export const PriceContainer = styled.div`
	display: flex;
	margin-top: 8px;
`;
export const Price = styled.div`
	font-size: 22px;
	margin-right: 14px;
	font-weight: 600;
`;
export const MRP = styled.div`
	font-size: 22px;
	color: grey;
	margin-right: 20px;
`;
export const Discount = styled.div`
	color: ${(props) => props.theme.colors.primary};
	font-weight: 700;
	margin-top: 5px;
`;

export const Tax = styled.div`
	color: ${(props) => props.theme.colors.primary};
	font-weight: 100;
	margin-top: 5px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 25px;
	padding-bottom: 30px;
	border-bottom: 1px solid lightgrey;
`;

export const DeliveryContainer = styled.div`
	display: flex;
	margin-top: 15px;
	margin-bottom: 7px;
`;

export const DeliveryDate = styled.div`
	font-size: 15px;
	margin-top: 2px;
	color: darkslategrey;
	margin-bottom: 5px;
	margin-left: 10px;
`;
export const SellerName = styled.div`
	border-bottom: 1px solid lightgrey;
	padding-bottom: 5px;
`;
export const ProductDetailHeadingContainer = styled.div`
	display: flex;
	margin-top: 16px;
`;
export const ProductDetailHeading = styled.div`
	font-weight: 700;
	margin-left: 11px;
`;
export const ProductDetail = styled.div`
	margin-top: 15px;
	padding-left: 7px;
`;

export const HandmadeProduct = styled.div`
	font-size: 13px;
	margin-top: 20px;
	padding-bottom: 5px;
	border-bottom: 1px solid lightgrey;
	padding-left: 6px;
	color: ${(props) => props.theme.colors.primary};
`;

export const CustomerReviews = styled.div`
	margin-top: 20px;
	font-weight: 600;
	margin-bottom: 10px;
`;

export const ReviewContainer = styled.div`
	display: flex;
	margin-top: 25px;
`;
export const Star = styled.div`
	font-size: 12px;
	margin-left: 2px;
	margin-top: 4px;
`;
export const ProductReviewDeatils = styled.div`
	margin-left: 20px;
	margin-top: 2px;
	color: darkslategray;
	font-size: 15px;
	margin-bottom: 5px;
`;

export const ReviewerName = styled.div`
	padding-left: 47px;
	margin-top: 2px;
	color: darkslategray;
	font-size: 15px;
	border-bottom: 1px solid lightgrey;
	padding-bottom: 9px;
`;
