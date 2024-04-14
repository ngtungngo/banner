import React from 'react'
import Abi2024 from './containers/Abi2024'
import { MultipleChoice } from './containers/MultipleChoice'


const App = (): JSX.Element => {
	const [stage, setStage] = React.useState<number>(0)
	const [notification, setNotification] = React.useState<string | undefined>('')

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
				answers={[['A', 'sau froh'], ['B', 'Auto'], ['C', 'Bauklo'], ['D', 'schaut so']]}
				correctAnswer={1}
				advance={advance}
			/>
		</main>
	)
}

export default App
