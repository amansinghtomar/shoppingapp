import React from 'react';
//MUI Library
import Typography from '../Typography/Typography';
import Avatar from '@mui/material/Avatar';
import Items from '../MenuItem/Items';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import './Navbar.css';
//MUI Icons
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
	NavbarContainer,
	NavLink,
	NavList,
	NavListConatiner,
	NavUl,
} from './NavbarStyles';
import { useNavigate } from 'react-router-dom';
//firebase
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Navbar({ isAuthenticated }) {
	const router = useNavigate();

	const settingItemList = [
		'About Us',
		'Terms and Condition',
		'Privacy Policy',
		'Delete Account',
	];

	const menuList = [
		{
			name: 'Profile',
			iconType: <Avatar />,
		},
		{
			name: 'My Account',
			iconType: <Avatar />,
		},
		{
			name: 'My Wishlist',
			iconType: (
				<ListItemIcon>
					<FavoriteIcon fontSize="small" />
				</ListItemIcon>
			),
			handleClick: () => {
				router('/wishlist');
			},
		},
		{
			name: 'Add Another account',
			iconType: (
				<ListItemIcon>
					<PersonAdd fontSize="small" />
				</ListItemIcon>
			),
		},
		{
			name: 'Settings',
			iconType: (
				<ListItemIcon>
					<Settings fontSize="small" />
				</ListItemIcon>
			),
			handleClick: () => {
				router('/setting', { state: settingItemList });
			},
		},
		{
			name: 'Logout',
			iconType: (
				<ListItemIcon>
					<Logout fontSize="small" />
				</ListItemIcon>
			),
			handleClick: () => {
				signOut(auth);
			},
		},
	];

	const checkAuthentication = () => {
		return isAuthenticated ? (
			<Items menuList={menuList} type="Account settings" />
		) : (
			<NavLink to={'login'}>
				<LoginIcon />
			</NavLink>
		);
	};
	return (
		<NavbarContainer>
			<Typography variant="h4">
				My <span style={{ color: '#08a2ab' }}>Art Cart</span>{' '}
			</Typography>
			<NavListConatiner className="nav">
				<NavUl>
					<NavList>
						<NavLink to="/">
							<HomeIcon />
						</NavLink>
					</NavList>
					<NavList>
						<NavLink to="/following">
							<ExploreIcon />
						</NavLink>
					</NavList>
					<NavList>
						<NavLink to="cart">
							<ShoppingCartIcon />
						</NavLink>
					</NavList>
					<NavList>{checkAuthentication()}</NavList>
				</NavUl>
			</NavListConatiner>
		</NavbarContainer>
	);
}
