import React from 'react';
import { Input } from '../../components/Input/Input';
import Typography from '../../components/Typography/Typography';
import { InputWrapper } from './FormStyles';

function InputContainer({ handleChange, onBlur, inputData, touched, errors }) {
	return (
		<InputWrapper>
			<Input fullwidth onChange={handleChange} onBlur={onBlur} {...inputData} />
			{touched[inputData.name] && errors[[inputData.name]] && (
				<Typography color="error">{errors[inputData.name]}</Typography>
			)}
		</InputWrapper>
	);
}

export default InputContainer;
