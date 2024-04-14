import { Card, Container, Content, Subtitle, Title } from '../components'


export const MultipleChoice = ({ title, question, answers }: {
	title: string;
	question: string;
	answers: [string, string][];
}) => {
	return (
		<Container>
			<Card>
				<Content>
					<Title>{title}</Title>
					<p className="text-h4 iphone:text-h5 font-bold">{question}</p>
					<Subtitle>
						{answers.map(([ letter, answer ]) => (
							<p key={letter} className="py-4 iphone:pt-0 font-thin font-serif">
								{letter}: {answer}
							</p>
						))}
					</Subtitle>
				</Content>
			</Card>
		</Container>
	)
}