import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

export const ShoppingCardWrapper = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: white;
  margin-top: 10px;
  @media (max-width: 536px) {
    width: 100%;
  }
`;

export const ShoppingCardImage = styled.img`
  width: 100px;
  height: 150px;
  margin: 5px;
  object-fit: cover;
`;

export const ShoppingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 12px;
  padding-top: 5px;
  flex: 1;
`;

export const ShoppingCardAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 12rem;
  @media (max-width: 536px) {
    padding-left: 0;
  }
`;

export const DeleteButton = styled(DeleteIcon)`
  margin-right: 8px;
  padding: 6px;
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 50px;
  }
`;
