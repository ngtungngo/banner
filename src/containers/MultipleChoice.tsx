import { Card, Container, Content, Question, Title } from '../components'
import React from 'react'


export const MultipleChoice = ({ title, question, answers, correctAnswer, advance }: {
	title: string,
	question: string,
	answers: [string, string][],
	correctAnswer: number,
	advance: (isCorrect: boolean) => void,
}) => {
	const bgColors = ['bg-emerald-400', 'bg-pink-600', 'bg-amber-300', 'bg-blue-500']
	const hoverColors = ['hover:bg-emerald-500', 'hover:bg-pink-700', 'hover:bg-amber-400', 'hover:bg-blue-600']

	const handleClick = (i: number) => {
		advance(i === correctAnswer)
	}

	return (
		<Container>
			<Card>
				<Content>
					<Title>{title}</Title>
					<Question question={question} />
					<div className="py-4 iphone:pt-0 w-full">
						<div className="flex flex-auto flex-col w-full gap-2">
							{answers.map(([ letter, answer ], i) => (
								<button
									key={i}
									className={`
										p-4 iphone:pt-0 text-h7 font-light font-sans text-left
										w-full border-0 text-white ${bgColors[i]} ${hoverColors[i]} rounded-lg 
									`}
									onClick={() => handleClick(i)}
								>
									<span className="font-bold text-[18px]">{letter}:</span> <span className="font-bold hover:italic text-2xl">{answer}</span>
								</button>
							))}
						</div>
					</div>
				</Content>
			</Card>
		</Container>
	)
}