import React from "react";
import DashboardRightContainer from "./DashboardRight";
import DashboardLeftContainer from "./DashboardLeftContainer";
import { DashboardWrapper } from "./DashboardStyles";

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <DashboardLeftContainer />
      <DashboardRightContainer />
    </DashboardWrapper>
  );
}
