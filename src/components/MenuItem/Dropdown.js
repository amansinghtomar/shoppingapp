import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function DefaultMenuItem({
	selectedValue,
	handleUpdateItem,
	id,
	options,
	size = 'small',
}) {
	return (
		<FormControl
			size={size}
			style={size === 'small' ? { width: '70px' } : { width: '150px' }}
		>
			<Select
				labelId="demo-simple-select-autowidth-label"
				id="demo-simple-select-autowidth"
				value={selectedValue}
				onChange={(event) => handleUpdateItem(event.target.value, id)}
				autoWidth
				sx={{ height: '30px' }}
			>
				{options &&
					options.map((option) => (
						<MenuItem key={option.id} value={option.value}>
							{option.value}
						</MenuItem>
					))}
			</Select>
		</FormControl>
	);
}

export default DefaultMenuItem;
