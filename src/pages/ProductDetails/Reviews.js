import React from "react";
import { ReviewContainer, StarContainer } from "./ProductDetailStyle";
import StarIcon from "@mui/icons-material/Star";
import Typography from "../../components/Typography/Typography";

function Reviews({ review }) {
  const { star, comment, name } = review;
  return (
    <>
      <ReviewContainer>
        <StarContainer>
          <Typography color="secondary" fontSize="12px" fontWeight="500">
            {star}
          </Typography>
          <StarIcon
            style={{
              color: "white",
              fontSize: "16px",
            }}
          ></StarIcon>
        </StarContainer>

        <Typography>{comment}</Typography>
      </ReviewContainer>
      <Typography>{name}</Typography>
    </>
  );
}

export default Reviews;
