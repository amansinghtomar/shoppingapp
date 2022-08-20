import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  margin: 30px;

  @media (max-width: 536px) {
    margin: 0;
  }
`;

export const DashboardLeft = styled.div`
  width: 70%;
  margin-right: 30px;

  @media (max-width: 920px) {
    width: 100%;
  }

  @media (max-width: 536px) {
    margin: 9px;
  }
`;

export const DashboardRight = styled.div`
  background-color: white;
  width: 30%;
  padding: 20px;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const CardContainer = styled.div`
  /* margin: 2rem 5rem;
  width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AccountSuggestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const AccountInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 0.5;
`;
