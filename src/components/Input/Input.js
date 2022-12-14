import styled from 'styled-components';

export const Input = styled.input`
	width: ${(props) => (props.fullwidth ? '100%' : '250px')};
	height: 3rem;
	border: none;
	border-radius: 25px;
	padding: 0.7em 1em;
	box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;

	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.colors.primary};
	}
`;
