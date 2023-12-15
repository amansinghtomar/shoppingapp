import styled from 'styled-components';

export const Card = styled.div`
	display: inline-block;
	position: relative;
	margin: 10px;
	width: 210px;
	box-shadow: ${(props) => props.theme.boxShadow.light};
	border-radius: 5px;
	&:hover {
		cursor: pointer;
	}

	@media (max-width: 539px) {
		margin: 5px 0;
	}
	@media (max-width: 439px) {
		width: 190px;
		margin: 5px 0;
	}
	@media (max-width: 379px) {
		width: 100%;
		margin: 5px;
	}
`;

export const CardImage = styled.div`
	position: relative;
	background-image: ${({ src }) => `url(${src})`};
	height: 280px;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
`;

export const CardRating = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 999;
	display: flex;
	align-items: center;
	gap: 2px;
	margin: 5px 10px;
	background-color: ${(props) => props.theme.colors.secondary};
	padding: 2px 4px 2px 6px;
`;

export const Container = styled.div`
	margin: 5px 10px;
`;

export const PriceContainer = styled.div`
	display: flex;
	margin-top: 8px;
	align-items: center;
	gap: 5px;
`;
