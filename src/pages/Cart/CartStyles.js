import styled from 'styled-components';

export const CartWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 90vh;
	margin: 30px;
`;

export const CartLeftConatiner = styled.div`
	//background: pink;
	height: 90vh;
	width: 100%;
	flex: 1;

	@media (max-width: 920px) {
		width: 100%;
	}

	@media (max-width: 536px) {
		margin: 9px;
	}
`;

export const CartRightContainer = styled.div`
	//background: wheat;
	width: 100%;
	height: 90vh;
	flex: 0.5;

	@media (max-width: 920px) {
		display: none;
	}
`;

export const CartCardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	flex-direction: column;
`;

export const CoupnContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	align-items: center;
	background: ${(props) => props.theme.colors.secondary};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	margin: 20px;
	border-radius: 5px;
`;

export const PriceContainer = styled.div`
	padding: 20px;
	background: ${(props) => props.theme.colors.secondary};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	margin: 20px;
	border-radius: 5px;
`;

export const PriceDetails = styled.div`
	margin-top: 15px;
`;

export const PriceInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 10px;
`;

export const PlaceOrder = styled.div`
	margin: 20px;
	padding-top: 10px;
`;
