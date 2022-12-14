import * as React from 'react';
//MUI library
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';

export default function AlertBox({ visible, severity, message, open }) {
	return (
		visible && (
			<Snackbar
				open={open}
				autoHideDuration={6000}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Alert severity={severity}>{message}</Alert>
			</Snackbar>
		)
	);
}

AlertBox.propTypes = {
	visible: PropTypes.bool.isRequired,
	severity: PropTypes.string,
	message: PropTypes.string,
	open: PropTypes.bool,
	children: PropTypes.string,
};
