import { Card } from "./ProductCardStyles";
import styled from 'styled-components';
import CancelIcon from '@mui/icons-material/Cancel';

export const WishListCardWrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CrossIcon = styled(CancelIcon)`
	position: absolute;
	top: 0;
	right: 0;
	margin: 5px 10px;
	background-color: ${(props) => props.theme.colors.secondary};
`;