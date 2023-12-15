import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress } from '@mui/material';

function BackDrop({ loading }) {
	return (
		<Backdrop
			sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={loading}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
}

BackDrop.propTypes = {
	loading: PropTypes.bool.isRequired,
};

export default BackDrop;
