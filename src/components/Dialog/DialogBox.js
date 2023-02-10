import * as React from 'react';
import Form from '../Form/Form';
import useInput from '../../hooks/useInput';
import { DialogContentWrapper, DialogWrapper } from './DialogStyles';

export default function FormDialog({ open, handleClose }) {
	const { value, handleChange, isValid, errors, touched, onBlur } = useInput({
		applyCoupon: '',
	});

	const applyCouponInput = [
		{
			type: 'text',
			placeholder: 'Enter coupon code',
			name: 'applyCoupon',
			value: value.applyCoupon,
		},
	];

	return (
		<div>
			<DialogWrapper open={open} onClose={handleClose}>
				<DialogContentWrapper>
					<Form
						formTitle="Apply coupn"
						formFields={applyCouponInput}
						handleChange={handleChange}
						onBlur={onBlur}
						touched={touched}
						errors={errors}
						actionButtonTitle="Apply"
						isValid={isValid}
						handleActionButton={handleClose}
					/>
				</DialogContentWrapper>
			</DialogWrapper>
		</div>
	);
}
