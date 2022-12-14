import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

export default function BackDrop({ loading }) {
	return (
		<>
			{' '}
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</>
	);
}

BackDrop.propTypes = {
	loading: PropTypes.bool.isRequired,
};
