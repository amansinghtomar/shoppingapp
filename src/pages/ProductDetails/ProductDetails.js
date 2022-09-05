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
  RatingContainer,
  PriceContainer,
  ButtonContainer,
  DeliveryContainer,
  ProductDetailHeadingContainer,
  ReviewContainer,
  StarContainer,
} from "./ProductDetailStyle";
import { Divider } from "@mui/material";

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
            <ShareIcon>Share</ShareIcon>
          </ProductTitleConatainer>

          <RatingContainer>
            <Typography>
              {`${
                location.state.review && location.state.review.length
              } Reviews`}
            </Typography>

            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={location.state.star}
              readOnly
            />
          </RatingContainer>

          <PriceContainer>
            <Typography
              as="h2"
              fontWeight="600"
            >{`$ ${location.state.productPrice}`}</Typography>
            <Typography as="h2" fontWeight="600">
              <s>{`MRP ${location.state.TotalMRP}`}</s>
            </Typography>
            <Typography
              as="h3"
              color="primary"
            >{`${location.state.productDiscount}% OFF`}</Typography>
          </PriceContainer>

          <Typography
            fontWeight="100"
            color="primary"
          >{`Inclusive of all taxes`}</Typography>

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
            <Typography>{`Deliver By : ${location.state.DeliveryDate}`}</Typography>
          </DeliveryContainer>

          <Typography>{`Seller : ${location.state.SellerName}`}</Typography>

          <Divider sx={{ marginTop: "10px" }} />
          <ProductDetailHeadingContainer>
            <TextSnippetIcon style={{ color: "dimgray" }}></TextSnippetIcon>
            <Typography as="h4" fontWeight="700">
              PRODUCT DETAILS
            </Typography>
          </ProductDetailHeadingContainer>
          <Typography gutterBottom="20">
            {location.state.productDetail}
          </Typography>

          <Typography color="primary">
            100% original and handmade product
          </Typography>

          <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />

          <Typography as="h5" fontWeight="600">{`Customer Reviews (${
            location.state.review && location.state.review.length
          })`}</Typography>

          {location.state.review &&
            location.state.review.length !== 0 &&
            location.state.review.map((review) => {
              return (
                <>
                  <ReviewContainer>
                    <StarContainer>
                      <Typography
                        color="secondary"
                        fontSize="12px"
                        fontWeight="500"
                      >
                        {review.star}
                      </Typography>
                      <StarIcon
                        style={{
                          color: "white",
                          fontSize: "16px",
                        }}
                      ></StarIcon>
                    </StarContainer>

                    <Typography>{review.comment}</Typography>
                  </ReviewContainer>
                  <Typography>{review.name}</Typography>
                </>
              );
            })}
        </ProductDetailContainer>
      </ProductContainer>
    </>
  );
}
