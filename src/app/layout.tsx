import type { Metadata } from 'next';

import { Provider as ChakraProvider } from '@/components/ui/provider';
import { ColorModeProvider } from '@/components/ui/color-mode';

export const metadata: Metadata = {
	title: 'Bounty Super Staker',
	description: 'Super stake yield farming on Solana',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body>
				<ChakraProvider>
					<ColorModeProvider>{children}</ColorModeProvider>
				</ChakraProvider>
			</body>
		</html>
	);
}
