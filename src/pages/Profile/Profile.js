import { Divider } from '@mui/material';
import React from 'react';
import ProfilePost from './ProfilePost';
import { ProfileContainer } from './ProfileStyles';
import ProfileTop from './ProfileTop';

function Profile() {
	return (
		<ProfileContainer>
			<ProfileTop />
			<Divider style={{ marginTop: '50px' }} />
			<ProfilePost></ProfilePost>
		</ProfileContainer>
	);
}

export default Profile;
