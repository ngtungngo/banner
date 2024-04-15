import { Card, Container, Content, Subtitle, Title } from '../components'


export const MultipleChoice = ({ title, question, answers, advance, correctAnswer }: {
	title: string;
	question: string;
	answers: Record<string, string>;
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
							{Object.keys(answers).map((letter, index) => (
								<button
									key={letter}
									className="py-4 iphone:pt-0 font-thin font-serif text-left"
									onClick={() => advance(index === correctAnswer)}
								>
									{letter}: {answers[letter]}
								</button>
							))}
						</div>
					</Subtitle>
				</Content>
			</Card>
		</Container>
	)
}