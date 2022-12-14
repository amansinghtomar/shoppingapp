import { Avatar } from '@mui/material';
import React from 'react';
import { Button } from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import {
	FollowButtonConatiner,
	ProfileAction,
	ProfileDescription,
	ProfileDetail,
	ProfileInfo,
	ProfileInfoConatiner,
} from './ProfileStyles';
import image from '../../assets/temp.jpg';

function ProfileTop() {
	return (
		<ProfileInfoConatiner>
			<Avatar sx={{ width: 140, height: 140 }} src={image} />
			<ProfileInfo>
				<ProfileAction>
					<Typography as="h4">Aman Tomar</Typography>
					<FollowButtonConatiner>
						<Button width="100px">Follow</Button>
					</FollowButtonConatiner>
				</ProfileAction>
				<ProfileDetail>
					<Typography as="h5">10 posts</Typography>
					<Typography as="h5">230 Followers</Typography>
				</ProfileDetail>
				<ProfileDescription>
					<Typography>I am a cool dude</Typography>
				</ProfileDescription>
			</ProfileInfo>
		</ProfileInfoConatiner>
	);
}

export default ProfileTop;
