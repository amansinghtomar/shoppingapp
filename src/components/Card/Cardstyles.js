import styled from 'styled-components';
import { Avatar, Dialog } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
	background-color: white;
	width: 30rem;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	border-radius: 10px;
	margin-top: 20px;
`;

export const CardTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
export const UserDetail = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10px;
`;

export const UserImage = styled(Avatar)`
	position: inherit;
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5rem 1rem;
`;

export const UserActionIcon = styled(MoreVertIcon)`
	margin-right: 9px;

	&:hover {
		cursor: pointer;
		border-radius: 50px;
	}
`;

export const CardMiddle = styled.div`
	width: 100%;
`;

export const ContentImage = styled.img`
	width: 100%;
	height: 25rem;
	object-fit: cover;
`;

export const CardBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0px 20px;
`;

export const FavoriteButton = styled(FavoriteBorderOutlinedIcon)`
	margin-right: 8px;
	padding: 6px;
	&:hover {
		cursor: pointer;
		background: rgba(0, 0, 0, 0.04);
		border-radius: 50px;
	}
`;

export const FavoriteButtonRed = styled(FavoriteIcon)`
	margin-right: 8px;
	padding: 6px;
	color: red;
	&:hover {
		cursor: pointer;
		background: rgba(0, 0, 0, 0.04);
		border-radius: 50px;
	}
`;

export const CartButton = styled(LocalGroceryStoreOutlinedIcon)`
	padding: 6px;
	&:hover {
		cursor: pointer;
		background: rgba(0, 0, 0, 0.04);
		border-radius: 50px;
	}
`;

export const LikesContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const CardOverview = styled.div`
	display: flex;
	padding: 10px;
`;

export const CardDetail = styled.div`
	padding: 8px 20px;
`;

export const CustomDialog = styled(Dialog)`
	background: transparent;
`;

export const CustomLink = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.colors.default};
`;
