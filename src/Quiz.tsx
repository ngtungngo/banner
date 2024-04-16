import React from 'react'
import { DeutschAbi, GeschichtsAbi, IntegrationsTest } from './containers/Questions'

export const Quiz = ({ setSuccess }: { setSuccess: (isSuccessful: boolean) => void }) => {
	const [stage, setStage] = React.useState<number>(0)
	const [notification, setNotification] = React.useState<string | undefined>('')

	React.useEffect(() => {
		if (stage === 3) {
			setSuccess(true)
		}
	}, [stage])

	const advance = (isCorrect: boolean, congrats?: string, fail?: string) => {
		if (isCorrect) {
			setStage(stage + 1)
			setNotification(congrats ?? 'Richtig!')
		} else {
			setStage(0)
			setNotification(fail ?? 'Falsch!')
		}
	}

	const stages = [IntegrationsTest, DeutschAbi, GeschichtsAbi]

	return (
		<>
			{stage < 3 && stages[stage]({ advance })}
		</>
	)
}