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
  align-items: center;
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
  align-items: center;
  gap: 38px;
`;

export const PriceContainer = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 30px;
  align-items: center;
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
  align-items: center;
  gap: 10px;
`;

export const ProductDetailHeadingContainer = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 11px;
  align-items: center;
  margin-bottom: 15px;
`;

export const HandmadeProduct = styled.div`
  font-size: 13px;
  margin-top: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgrey;
  padding-left: 6px;
  color: ${(props) => props.theme.colors.primary};
`;

export const ReviewContainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 5px;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-right: 15px;
  background-color: #388e3c;
  padding: 2px 4px 2px 6px;
  border-radius: 3px;
`;
