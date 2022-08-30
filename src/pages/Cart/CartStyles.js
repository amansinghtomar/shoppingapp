import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
  margin: 30px;
`;

export const CartLeftConatiner = styled.div`
  background: pink;
  height: 90vh;
  width: 100%;
  flex: 1;

  @media (max-width: 920px) {
    width: 100%;
  }

  @media (max-width: 536px) {
    margin: 9px;
  }
`;

export const CartRightContainer = styled.div`
  background: wheat;
  width: 100%;
  height: 90vh;
  flex: 0.5;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const CartCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
