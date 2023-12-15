import {
	Painting1,
	Painting2,
	Painting3,
	Painting4,
	Painting5,
	Painting6,
	Painting7,
} from '../../assets/Paintings';

export const CategoryList = [
	{
		id: 1,
		label: 'Category',
		items: [
			{
				id: 1,
				name: 'Gifts',
				checked: false,
			},
			{
				id: 2,
				name: 'Craft',
				checked: false,
			},
			{
				id: 3,
				name: 'Painting',
				checked: false,
			},
		],
	},
	{
		id: 2,
		label: 'Price',
		items: [
			{
				id: 1,
				name: '100 - 500',
				checked: false,
				value: {
					minValue: 100,
					maxValue: 500,
				},
			},
			{
				id: 2,
				name: '500 - 1000',
				checked: false,
				value: {
					minValue: 500,
					maxValue: 1000,
				},
			},
			{
				id: 3,
				name: '1000 - 1500',
				checked: false,
				value: {
					minValue: 1000,
					maxValue: 1500,
				},
			},
			{
				id: 4,
				name: '1500 - 2000',
				checked: false,
				value: {
					minValue: 1500,
					maxValue: 2000,
				},
			},
		],
	},
];

export const ProductItems = [
	{
		id: 1,
		image: Painting1,
		productPrice: 539,
		TotalMRP: 599,
		productDiscount: 10,
	},
	{
		id: 2,
		image: Painting2,
		productPrice: 539,
		TotalMRP: 599,
		productDiscount: 10,
	},
	{
		id: 3,
		image: Painting3,
		productPrice: 539,
		TotalMRP: 599,
		productDiscount: 10,
	},
	{
		id: 4,
		image: Painting4,
		productPrice: 539,
		TotalMRP: 599,
		productDiscount: 10,
	},
	{
		id: 5,
		image: Painting5,
		productPrice: 539,
		TotalMRP: 599,
		productDiscount: 10,
	},
	{
		id: 6,
		image: Painting6,
		productPrice: 539,
		TotalMRP: 599,
		productDiscount: 10,
	},
	{
		id: 7,
		image: Painting7,
		productPrice: 539,
		TotalMRP: 599,
		productDiscount: 10,
	},
];


export const mockData = [
	{
		location: 'Mumbai',
		productName: 'Beautiful Product5',
		DeliveryDate: 'Mon Sept 8',
		name: 'Aman Tomar',
		like: false,
		TotalMRP: 2000,
		id: 'wqQ1VDmvo2S6llcV4VpL',
		timestamp: {
			seconds: 1672845513,
			nanoseconds: 709000000,
		},
		category: 'Gifts',
		productDiscount: 200,
		review: [
			{
				star: 2,
				name: 'Nikita Ubale',
				comment: 'Good product',
			},
			{
				comment: 'Good product',
				star: 2,
				name: 'Nikita Ubale',
			},
			{
				name: 'Nikita Ubale',
				star: 2,
				comment: 'Good product',
			},
		],
		productDetail:
			'It is a very good product It is a very good product It is a very good product It is a very good product ',
		caption: 'this is my great art',
		image:
			'https://firebasestorage.googleapis.com/v0/b/shopping-app-efb7e.appspot.com/o/Products%2FPainting6.jpg?alt=media&token=933108d8-92bf-4e05-8c39-7c8329acfdeb',
		productPrice: 1800,
		SellerName: 'Nikita',
		likeCount: 0,
		star: 2,
	},
	{
		location: 'Mumbai',
		productName: 'Beautiful Product5',
		DeliveryDate: 'Mon Sept 8',
		name: 'Aman Tomar',
		like: false,
		TotalMRP: 2000,
		id: 'wqQ1VDmvo2S6llcV4VpG',
		timestamp: {
			seconds: 1672845513,
			nanoseconds: 709000000,
		},
		category: 'Gifts',
		productDiscount: 200,
		review: [
			{
				star: 2,
				name: 'Nikita Ubale',
				comment: 'Good product',
			},
			{
				comment: 'Good product',
				star: 2,
				name: 'Nikita Ubale',
			},
			{
				name: 'Nikita Ubale',
				star: 2,
				comment: 'Good product',
			},
		],
		productDetail:
			'It is a very good product It is a very good product It is a very good product It is a very good product ',
		caption: 'this is my great art',
		image:
			'https://firebasestorage.googleapis.com/v0/b/shopping-app-efb7e.appspot.com/o/Products%2FPainting6.jpg?alt=media&token=933108d8-92bf-4e05-8c39-7c8329acfdeb',
		productPrice: 1800,
		SellerName: 'Nikita',
		likeCount: 0,
		star: 2,
	},
	{
		location: 'Mumbai',
		productName: 'Beautiful Product5',
		DeliveryDate: 'Mon Sept 8',
		name: 'Aman Tomar',
		like: false,
		TotalMRP: 2000,
		id: 'wqQ1VDmvo2S6llcV4VpS',
		timestamp: {
			seconds: 1672845513,
			nanoseconds: 709000000,
		},
		category: 'Gifts',
		productDiscount: 200,
		review: [
			{
				star: 2,
				name: 'Nikita Ubale',
				comment: 'Good product',
			},
			{
				comment: 'Good product',
				star: 2,
				name: 'Nikita Ubale',
			},
			{
				name: 'Nikita Ubale',
				star: 2,
				comment: 'Good product',
			},
		],
		productDetail:
			'It is a very good product It is a very good product It is a very good product It is a very good product ',
		caption: 'this is my great art',
		image:
			'https://firebasestorage.googleapis.com/v0/b/shopping-app-efb7e.appspot.com/o/Products%2FPainting6.jpg?alt=media&token=933108d8-92bf-4e05-8c39-7c8329acfdeb',
		productPrice: 1800,
		SellerName: 'Nikita',
		likeCount: 0,
		star: 2,
	},
];