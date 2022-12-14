import React, { useState } from 'react';

export default function useInput(initialValue, validations) {
	const [value, setValue] = useState(initialValue);
	const [errors, setErrors] = useState({});
	const [isValid, setValid] = useState(true);
	const [touched, setTouched] = useState({});

	const handleChange = (event) => {
		const newValue = { ...value, [event.target.name]: event.target.value };
		setValue(newValue);
	};

	const reset = () => {
		setValue(initialValue);
	};

	function validate(validations, values, name) {
		const error = validations[name](values);
		return { isValid: Object.keys(error).length > 0, error: error };
	}

	function onBlur(event) {
		const { isValid, error } = validate(validations, value, [
			event.target.name,
		]);
		setErrors({ ...errors, [event.target.name]: error });
		setTouched({ ...touched, [event.target.name]: true });
		setValid(isValid);
	}

	return {
		value,
		handleChange,
		reset,
		isValid,
		errors,
		touched,
		onBlur,
	};
}
