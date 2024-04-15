import React, {useEffect} from "react"
import {MultipleChoice} from "./containers/MultipleChoice"


const App = (): JSX.Element => {
	const [stage, setStage] = React.useState<number>(0)
	const [notification, setNotification] = React.useState<string | undefined>('')
	const [answers, setAnswers] = React.useState<Record<string, string>>({})

	useEffect(() => {
		setAnswers({
			'A': 'sau froh',
			'B': 'Auto',
			'C': 'Bauklo',
			'D': 'schaut so'
		})
	}, [])

	const advance = (isCorrect: boolean, congrats?: string, fail?: string) => {
		if (isCorrect) {
			setStage(stage + 1)
			setNotification(congrats ?? 'Richtig!')
		} else {
			setStage(0)
			setNotification(fail ?? 'Falsch!')
		}
	}

	return (
		<main className="mt-4 h-full">
			<MultipleChoice
				title={'Deutschabitur Probeklausur: '}
				question={'Was reimt sich auf Auto?'}
				answers={answers}
				correctAnswer={1}
				advance={advance}
			/>
		</main>
	)
}

export default App
