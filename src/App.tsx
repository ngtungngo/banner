import React from 'react'
import Abi2024 from './containers/Abi2024'
import { Quiz } from './Quiz'


const App = (): JSX.Element => {
	const [success, setSuccess] = React.useState<boolean>(false)

	return (
		<main className="mt-4 h-full">
			{success ? <Abi2024 /> : <Quiz setSuccess={(isSuccessful: boolean) => setSuccess(isSuccessful)} />}
		</main>
	)
}

export default App
