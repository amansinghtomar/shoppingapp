import { useDispatch } from 'react-redux';
import { addNotification, clearNotification } from '../redux/notificationSlice';

export const useNotification = () => {
	const dispatch = useDispatch();

	const displayNotification = (notification) => {
		//console.log(typeof addNotification);
		dispatch(addNotification(notification));
	};

	const removeNotification = () => {
		dispatch(clearNotification());
	};

	return { displayNotification, removeNotification };
};
