import styled from 'styled-components';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Container = styled.div`
	display: flex;
	align-items: center;
	background: #fff;
	padding: 10px 5px;
`;

export const Prev = styled.button`
	background-color: #fff; 
	color: white; 
	padding: 1px; 
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
`;

export const PrevIcon = styled(KeyboardArrowLeftIcon)`
	color: ${(props) => (props.disabled ? 'grey' : '#000')} !important;
	cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

export const NextIcon = styled(KeyboardArrowRightIcon)`
	color: ${(props) => (props.disabled ? 'grey' : '#000')} !important;
	cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

export const Next = styled(Prev)``;

export const PaginationListContainer = styled.ul`
	margin: 20px 30px;
`;

export const PaginationList = styled.li`
	display: inline-block;
	margin: 0 2px;
	background-color: ${(props) => (props.isActive ? '#3498db' : '#fff')};
	width: 30px;
	height: 30px;
	border-radius: 50%;
	text-align: center;
	font-size: 15px;
	font-weight: 500;
	line-height: 30px;
	cursor: pointer;

	&:hover {
		background: #d4d9d6;
	}
`;

export const Ellipsis = styled(PaginationList)``;
