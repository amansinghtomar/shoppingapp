import styled from "styled-components";

export const ProfilePostContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  margin: 30px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 300px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;
export const ProfilePostButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
