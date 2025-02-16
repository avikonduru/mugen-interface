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
	Separator,
	Text,
	Link,
	Card,
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
						<Heading size="xl">bounty_super_staker</Heading>
						<Spacer />
						<Button variant="surface">Connect Wallet</Button>
					</Flex>
				</Container>
			</Box>
			<Box py="8">
				<Container maxWidth="3xl">
					<Card.Root variant={'subtle'}>
						<Card.Body>
							<Box>hihi</Box>
						</Card.Body>
					</Card.Root>
				</Container>
			</Box>
			<Box
				width="100%"
				py="4"
			>
				<Container maxWidth="5xl">
					<Flex
						direction="column"
						width="100%"
						gap="4"
					>
						<Separator />
						<Flex align="center">
							<Heading size="xl">bounty_super_staker</Heading>
							<Spacer />
							<IconButton
								aria-label="X Link"
								variant="ghost"
								mr={4}
							>
								<FaXTwitter />
							</IconButton>
						</Flex>
						<Flex
							align="center"
							justify="center"
							gap="4"
						>
							<Link variant="underline">Privacy Policy</Link>
							<Link variant="underline">Terms of Service</Link>
							<Text>&copy; 2025 Realm Labs</Text>
						</Flex>
					</Flex>
				</Container>
			</Box>
		</Fragment>
	);
};

export default HomePage;
