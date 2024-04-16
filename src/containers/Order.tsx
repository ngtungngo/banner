import React from 'react'
import { Card, Container, Question, Title } from '../components'
import resetImg from '../assets/reset_icon.svg'

type CorrectNumber = 0 | 1 | 2 | 3

export const Order = ({title, question, answers, correctOrder, advance}: {
	title: string,
	question: string,
	answers: [string, string, string, string],
	correctOrder: [CorrectNumber, CorrectNumber, CorrectNumber, CorrectNumber],
	advance: (isCorrect: boolean) => void,
}) => {
	const primaryColors = ['emerald-400', 'pink-600', 'amber-300', 'blue-500']
	const shades = ['emerald-700', 'pink-800', 'amber-500', 'blue-800']
	const bg = primaryColors.map((color) => `bg-${color}`)
	const hoverColors = ['hover:bg-emerald-500', 'hover:bg-pink-700', 'hover:bg-amber-200', 'hover:bg-blue-600']
	const borderColors = ['border-emerald-700', 'border-pink-800', 'border-amber-300', 'border-blue-800']
	const numberColors = ['text-emerald-800', 'text-pink-900', 'text-amber-600', 'text-blue-900']
	const [chosenOrder, setChosenOrder] = React.useState<CorrectNumber[]>([])

	const handleClick = (i: CorrectNumber) => {
		if (chosenOrder.includes(i)) {
			setChosenOrder(chosenOrder.filter((num) => num !== i))
			return
		}
		setChosenOrder([...chosenOrder, i])
	}

	React.useEffect(() => {
		if (chosenOrder.length === 4) {
			const isCorrect = chosenOrder.every((num, i) => num === correctOrder[i])
			setChosenOrder([])
			advance(isCorrect)
		}
	}, [chosenOrder, setChosenOrder])

	return (
		<>
			<Container>
				<Card>
					<Title>{title}</Title>
					<Question question={question}/>
					<div className="flex flex-auto flex-col w-full gap-2">
						{answers.map((answer, i) => (
							<div
								key={i}
								className={`
									py-4 iphone:pt-0 text-h7 font-light font-sans text-left text-2xl content-center
									w-full border-0 px-4 text-white hover:cursor-pointer ${bg[i]} ${hoverColors[i]} rounded-lg flex flex-row gap-3 items-center
								`}
								onClick={() => handleClick(i as CorrectNumber)}
							>
								<div className={`
									w-5 h-5 border rounded-md ${bg[i]} ${borderColors[i]} ${numberColors[i]}
									text-center align-middle flex items-center justify-center bg-white
								`}>
									{chosenOrder.includes(i as CorrectNumber) && (
										<span className="hover:cursor-pointer font-bold">
											{chosenOrder.indexOf(i as CorrectNumber) + 1}
										</span>
									)}
								</div>
								<span className="font-bold text-2xl">{answer}</span>
							</div>
						))}
						<button
							className="w-11 h-11 p-2 self-end rounded-full bg-slate-300 hover:bg-slate-400"
							onClick={() => setChosenOrder([])}
						>
							<img src={resetImg} alt="reset"/>
						</button>
					</div>
				</Card>
			</Container>
		</>
	)
}
