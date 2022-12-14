import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
	display: flex;
	position: sticky;
	justify-content: space-between;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	background: ${(props) => props.theme.colors.secondary};
	padding: 25px 70px;
	height: 10vh;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	z-index: 1000;
`;

export const NavListConatiner = styled.nav``;

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
