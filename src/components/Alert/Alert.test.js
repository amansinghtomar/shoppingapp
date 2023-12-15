import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AlertBox from './Alert';

// Mock the redux store
const mockStore = configureStore([]);

describe('Alert component', () => {
	let store;
	let component;

	beforeEach(() => {
		store = mockStore({
			notification: {
				open: true,
				type: 'success',
				message: 'Test message',
				timeout: 3000,
			},
		});

		component = render(
			<Provider store={store}>
                <AlertBox visible={true }/>
			</Provider>
		);
	});

	it('should render the alert box component', () => {
		const { getByText } = component;
		const messageElement = getByText('Test message');

		expect(messageElement).toBeInTheDocument();
	});

	it('should call removeNotification when the alert box is closed', () => {
		const { getByRole } = component;
		const closeButton = getByRole('button', { name: 'Close' });

		fireEvent.click(closeButton);

		const actions = store.getActions();
		expect(actions[0].type).toBe('notification/clearNotification');
	});
});
