import { Avatar } from "@mui/material";
import React from "react";
import Typography from "../../components/Typography/Typography";
import {
  AccountInfo,
  AccountSuggestion,
  DashboardRight,
} from "./DashboardStyles";

const DashboardRightContainer = () => {
  const randomFunction = () => {
    console.group("Random");
  };
  return (
    <DashboardRight>
      <Typography>People you may know</Typography>
      <AccountSuggestion>
        <AccountInfo>
          <Avatar />
          <Typography as="p">Aman Tomar</Typography>
        </AccountInfo>
        <Typography as="p" hover="true" color="orange" onClick={randomFunction}>
          Follow
        </Typography>
      </AccountSuggestion>
    </DashboardRight>
  );
};

export default DashboardRightContainer;
