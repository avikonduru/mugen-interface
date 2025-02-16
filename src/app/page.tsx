import React, { Fragment } from 'react';

// chakra
import {
	Box,
	Heading,
	Container,
	Spacer,
	Button,
	Flex,
	IconButton,
} from '@chakra-ui/react';
import { FaXTwitter } from 'react-icons/fa6';

const HomePage = () => {
	return (
		<Fragment>
			<Box
				background="gray.900"
				width="100%"
				py="4"
			>
				<Container maxWidth="5xl">
					<Flex align="center">
						<Heading size="2xl">Bounty Super Staker</Heading>
						<Spacer />
						{/* <IconButton
							aria-label="X Link"
							variant="surface"
							mr={4}
						>
							<FaXTwitter />
						</IconButton> */}
						<Button variant="surface">Connect Wallet</Button>
					</Flex>
				</Container>
			</Box>
		</Fragment>
	);
};

export default HomePage;
