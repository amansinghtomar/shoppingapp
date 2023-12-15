import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
	display: flex;
	position: sticky;
	justify-content: space-between;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	background: ${(props) => props.theme.colors.secondary};
	padding: 0 20px;
	//margin-left: 20px;
	height: 10vh;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	z-index: 1000;

	@media (max-width: 512px) {
		justify-content: center;
		padding: 0;
	}
`;
export const NavHeading = styled.div`
	
`;

export const NavListConatiner = styled.nav`
	@media (max-width: 512px) {
		display: none;
	}
`;

export const NavUl = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20px;
`;

export const NavList = styled.li`
	list-style: none;
	padding: 0 20px;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: black;

	&:hover {
		color: ${(props) => props.theme.colors.primary};
	}
`;
