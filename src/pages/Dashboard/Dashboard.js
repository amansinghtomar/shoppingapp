import React from "react";
import Card from "../../components/Card/Card";
import {
  CardContainer,
  DashboardLeft,
  DashboardRight,
  DashboardWrapper,
} from "./DashboardStyles";

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <DashboardLeft>
        <CardContainer>
          <Card />
        </CardContainer>
      </DashboardLeft>
      <DashboardRight></DashboardRight>
    </DashboardWrapper>
  );
}
