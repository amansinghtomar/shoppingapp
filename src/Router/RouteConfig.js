import React from 'react';

export const config = [
	{
		id: 1,
		path: '/',
		Element: React.lazy(() => import('../pages/Home/Home')),
		role: 'user',
	},
	{
		id: 2,
		path: 'login',
		Element: React.lazy(() => import('../pages/Authentication/Login')),
		role: 'user',
	},
	{
		id: 3,
		path: 'signup',
		Element: React.lazy(() => import('../pages/Authentication/Signup')),
		role: 'user',
	},
	{
		id: 4,
		path: 'profile',
		Element: React.lazy(() => import('../pages/Profile/Profile')),
		role: 'user',
	},
	{
		id: 5,
		path: 'product/:id',
		Element: React.lazy(() => import('../pages/ProductDetails/ProductDetails')),
		role: 'user',
	},
	{
		id: 6,
		path: 'setting',
		Element: React.lazy(() => import('../pages/Setting/Setting')),
		role: 'user',
	},
	{
		id: 7,
		path: 'category/:id',
		Element: React.lazy(() => import('../pages/Categories/Category')),
		role: 'user',
	},
	{
		id: 8,
		path: 'wishlist',
		Element: React.lazy(() => import('../pages/Wishlist/Wishlist')),
		role: 'user',
	},
	{
		id: 9,
		Element: React.lazy(() => import('./PrivateRoutes')),
		role: 'user',
		children: [
			{
				id: 10,
				path: 'cart',
				Element: React.lazy(() => import('../pages/Cart/Cart')),
			},
		],
	},
];
