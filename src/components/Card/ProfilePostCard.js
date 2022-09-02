import React from "react";
import {
  ProfileImage,
  ProfilePostButton,
  ProfilePostContainer,
} from "./ProfilePostStyles";
import image from "../../assets/temp.jpg";
import { Button } from "../Button/Button";

function ProfilePostCard() {
  return (
    <ProfilePostContainer>
      <ProfileImage src={image} alt="Profile Image" />
      <ProfilePostButton>
        <Button variant="secondary">View Product</Button>
      </ProfilePostButton>
    </ProfilePostContainer>
  );
}

export default ProfilePostCard;
