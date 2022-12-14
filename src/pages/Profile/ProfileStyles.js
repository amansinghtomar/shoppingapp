import { Avatar } from '@mui/material';
import styled from 'styled-components';

export const ProfileContainer = styled.div`
	margin: 30px 100px;

	@media (max-width: 748px) {
		margin: 30px 0px;
	}
`;

export const ProfileInfoConatiner = styled.div`
	display: flex;
	justify-content: center;
`;

export const ProfileImage = styled(Avatar)``;

export const ProfileInfo = styled.div`
	padding: 20px 80px;

	@media (max-width: 576px) {
		padding: 20px 30px;
	}
`;

export const ProfileAction = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ProfileDetail = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
`;

export const ProfileDescription = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin-top: 20px;
`;

export const FollowButtonConatiner = styled.div`
	margin-left: 40px;
`;

export const ProfilePostWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
