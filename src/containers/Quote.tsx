import { Card, Container, Question, Title } from '../components'
import React from 'react'

export const Quote = ({title, question, partialQuote, author, correctAnswer, advance}: {
	title: string,
	question: string,
	partialQuote: string,
	author?: string,
	correctAnswer: string,
	advance: (isCorrect: boolean) => void,
}) => {
	const [input, setInput] = React.useState<string>('')
	const [notification, setNotification] = React.useState<string | undefined>(undefined)

	React.useEffect(() => {
		input.trim().toLowerCase() === correctAnswer.trim().toLowerCase() ? advance(true) : taunt()
	}, [input])

	const taunt = () => {
		setNotification(undefined)
		setTimeout(() => {
			input.toLowerCase() !== correctAnswer.toLowerCase() && setNotification('Gedächtnis wie ein Sieb!')
		}, 1000)
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}

	return (
		<>
			<Container>
				<Card>
					<Title>
						{title}
					</Title>
					<div className="flex flex-col">
						<Question question={question}/>
						<p className="text-sm font-thin text-gray-400 mb-4">Verwende ae statt ä usw. und ss anstatt ß</p>
						<p className="text-h6 iphone:text-body-1 font-light mb-2">{partialQuote}</p>
						<input
							type="text"
							className="w-full border focus:border-pink-300 focus:outline-none rounded-md text-h7 h-8 px-1"
							onChange={handleChange}
							placeholder="k--n s-- ... w---n"
						/>
						{author && <p className="text-xl font-light text-gray-500 self-end italic">— {author}</p>}
					</div>
				</Card>
			</Container>
		</>
	)
}