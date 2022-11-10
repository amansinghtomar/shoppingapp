import styled from "styled-components";

export const Image = styled.img`
   max-inline-size: 100%;
   block-size: auto;
   aspect-ratio: 2/1;
   object-fit: cover;
   object-position: center;
   height: 500px;
   width: 100%;
`;

export const Container = styled.div`
   margin-top: 20px;
   display: flex;
   flex-direction: column;
   gap: 20px;
`;

export const Wrapper = styled.div`
   display: flex;
   gap: 20px;
   align-items: center;
   flex-wrap: wrap;
`;
