import React from 'react';
import ProfilePostCard from '../../components/Card/ProfilePostCard';
import { ProfilePostWrapper } from './ProfileStyles';

function ProfilePost() {
	return (
		<ProfilePostWrapper>
			<ProfilePostCard />
			<ProfilePostCard />
			<ProfilePostCard />
		</ProfilePostWrapper>
	);
}

export default ProfilePost;
