import { Card, Container, Content, Subtitle, Title } from '../components'


export const MultipleChoice = ({ title, question, answers }: {
	title: string;
	question: string;
	answers: [string, string][];
	correctAnswer: number;
	advance: (isCorrect: boolean) => void;
}) => {
	return (
		<Container>
			<Card>
				<Content>
					<Title>{title}</Title>
					<p className="text-h4 iphone:text-h5 font-bold text-left">{question}</p>
					<Subtitle>
						<div className="flex flex-auto flex-col">
							{answers.map(([ letter, answer ]) => (
								<button key={letter} className="py-4 iphone:pt-0 font-thin font-serif text-left">
									{letter}: {answer}
								</button>
							))}
						</div>
					</Subtitle>
				</Content>
			</Card>
		</Container>
	)
}