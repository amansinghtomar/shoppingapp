import styled from 'styled-components';

export const CategoryContainer = styled.div`
	height: 87vh;
	display: flex;
	gap: 20px;
	margin: 10px;
`;

export const CategoryFilterContainer = styled.div`
	background: ${(props) => props.theme.colors.secondary};
	width: 20%;
	box-shadow: ${(props) => props.theme.boxShadow.light};
	padding: 20px;

	@media (max-width: 978px) {
		width: 30%;
	}

	@media (max-width: 621px) {
		display: none;
	}
`;

export const CategoryProductContainer = styled.div`
	background: ${(props) => props.theme.colors.secondary};
	width: 80%;
	box-shadow: ${(props) => props.theme.boxShadow.light};
	overflow: scroll;

	@media (max-width: 621px) {
		width: 100%;
	}
`;

export const CheckboxContainer = styled.div`
	margin-top: 10px;
`;

export const CheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const TopProductContainer = styled.div`
	box-shadow: ${(props) => props.theme.boxShadow.light};
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;

export const ProductList = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	//justify-content: space-between;
	gap: 5px;
	//padding: 20px;

	@media (max-width: 1040px) {
		justify-content: space-around;
	}
	@media (max-width: 539px) {
		padding: 0px;
	}
	@media (max-width: 439px) {
		gap: 0;
	}
`;
