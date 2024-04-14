import React from 'react'
import Abi2024 from './containers/Abi2024'
import { MultipleChoice } from './containers/MultipleChoice'


const App = (): JSX.Element => (
	<main className="mt-4 h-full">
		<Abi2024/>
		<MultipleChoice
			title={'Deutschabitur Probeklausur: '}
			question={'Was reimt sich auf Auto?'}
			answers={[['A', 'saufroh'], ['B', 'Auto'], ['C', 'Bautklo'], ['D', 'schaut so']]}
		/>
	</main>
)

export default App
