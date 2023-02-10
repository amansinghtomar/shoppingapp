import * as React from 'react';
//MUI library
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';
import { useNotification } from '../../hooks/useNotification';
import { useSelector } from 'react-redux';

export default function AlertBox() {
	const { removeNotification } = useNotification();
	const { open, type, message, timeout } = useSelector(
		(state) => state.notification
	);

	const handleClose = () => {
		removeNotification();
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={timeout}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
		>
			<Alert severity={type} onClose={handleClose}>
				{message}
			</Alert>
		</Snackbar>
	);
}

AlertBox.propTypes = {
	visible: PropTypes.bool.isRequired,
	severity: PropTypes.string,
	message: PropTypes.string,
	open: PropTypes.bool,
	children: PropTypes.string,
};
