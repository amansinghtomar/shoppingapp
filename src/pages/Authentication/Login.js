import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Typography from '../../components/Typography/Typography';
import {
	Wrapper,
	SignInContent,
	SignInTop,
	SignInBottom,
	GoogleSignIn,
	StyledLink,
	LoginLinkWrapper,
} from './AuthenticationStyles';
import { Button } from '../../components/Button/Button';
import useInput from '../../hooks/useInput';
import { emailValidate, passwordValidator } from '../../utils';
import Form from '../../components/Form/Form';
import { googleSignIn, userSignIn } from '../../redux/authenticationSlice';
import AlertBox from '../../components/Alert/Alert';
import GoogleLogo from '../../assets/google.svg';

export default function Login() {
	const user = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const route = useNavigate();
	const timerRef = useRef(null);

	const [alert, setAlert] = useState({
		visible: false,
		severity: '',
		message: '',
	});

	const validations = {
		email: ({ email }) => emailValidate(email),
		password: ({ password }) => passwordValidator(password),
	};

	const {
		value: { email, password },
		handleChange,
		reset,
		isValid,
		errors,
		touched,
		onBlur,
	} = useInput(
		{
			email: '',
			password: '',
			method: '',
		},
		validations
	);

	useEffect(() => {
		if (user.isAuthenticated) {
			route('/');
		}
	}, [user.isAuthenticated]);

	useEffect(() => {
		if (Object.keys(user.error).length > 0) {
			setAlert({
				visible: true,
				severity: 'error',
				message: user.error.message,
			});
			timerRef.current = setTimeout(() => {
				setAlert({ visible: false, severity: '', message: '' });
			}, 2000);
		}
	}, [user.error]);

	useEffect(() => () => clearInterval(timerRef.current), []);

	const handleSignIn = (event) => {
		event.preventDefault();
		dispatch(userSignIn({ email, password, method: 'signin' }));
		reset();
	};

	const signinInput = [
		{
			type: 'email',
			placeholder: 'Email',
			name: 'email',
			value: email,
		},
		{
			type: 'password',
			placeholder: 'Password',
			name: 'password',
			value: password,
		},
	];

	return (
		<Wrapper>
			<SignInContent>
				<AlertBox
					visible={alert.visible}
					severity={alert.severity}
					message={alert.message}
				/>
				<SignInTop>
					<Form
						formTitle="Login"
						formFields={signinInput}
						handleChange={handleChange}
						onBlur={onBlur}
						touched={touched}
						errors={errors}
						actionButtonTitle="Login"
						isValid={isValid}
						handleActionButton={handleSignIn}
						loading={user.loading}
					/>
				</SignInTop>
				<SignInBottom>
					<Typography variant="body1" align="center">
						OR
					</Typography>
					<GoogleSignIn>
						<Button
							fullWidth
							rounded
							startIcon={GoogleLogo}
							color="default"
							background="secondary"
							onClick={() => dispatch(googleSignIn())}
						>
							Continue with Google
						</Button>
					</GoogleSignIn>
					<LoginLinkWrapper>
						<StyledLink to="/signup">New Customer? Signup</StyledLink>
						<Typography variant="body1" hover="true" color="primary">
							Need help?
						</Typography>
					</LoginLinkWrapper>
				</SignInBottom>
			</SignInContent>
		</Wrapper>
	);
}
