import styled from 'styled-components';

export const CardContainer = styled.div`
	/* margin: 2rem 5rem;
  width: 100%; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const DashboardLeft = styled.div`
	width: 70%;
	margin-right: 30px;

	@media (max-width: 920px) {
		width: 100%;
	}

	@media (max-width: 536px) {
		margin: 9px;
	}
`;
