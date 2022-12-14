import React from 'react';
import { Button } from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import { Wrapper } from '../../pages/Authentication/AuthenticationStyles';
import { Container, NoDataImage } from './EmptyStyles';

function Empty({ image, message, btnTitle, handleBtn }) {
	return (
		<Wrapper>
			<Container>
				<NoDataImage src={image} alt="No Data Found" />
				<Typography as="p" align="center" gutterBottom="10">
					{message}
				</Typography>
				<Button fullWidth text onClick={handleBtn}>
					{btnTitle}
				</Button>
			</Container>
		</Wrapper>
	);
}

export default Empty;
