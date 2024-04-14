import { PropsWithChildren } from 'react';
import { Card, Container, Content, Subtitle, Title } from '../components';

const YourFamily = {
	shout: (text: string) => <p className="text-h1 iphone:text-h5 font-bold">{text}</p>,
};



const Abi2024 = () => {
	return (
		<Container>
			<Card>
				<Content>
					<Title>Abi 2024</Title>
					{YourFamily.shout('KING')}
					<Subtitle>
						<p>The King is a fighting piece.Use it!</p>
						<p>Thiên Minh, du schaft es!</p>
					</Subtitle>
				</Content>
			</Card>
		</Container>
	);
};

export default Abi2024;
