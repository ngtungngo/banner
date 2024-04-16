import { MultipleChoice } from './MultipleChoice'
import React from 'react'
import { Quote } from './Quote'
import { Order } from './Order'

export const DeutschAbi = ({advance}: {advance: (isCorrect: boolean) => void}) => (
	<MultipleChoice
		title={'Deutschabitur Probeklausur: '}
		question={'Was reimt sich auf Auto?'}
		answers={[['A', 'sau froh'], ['B', 'Auto'], ['C', 'Bauklo'], ['D', 'schaut so']]}
		correctAnswer={1}
		advance={advance}
	/>
)

export const GeschichtsAbi = ({advance}: {advance: (isCorrect: boolean) => void}) => (
	<Quote
		title={'Geschichtsabitur Probeklausur: '}
		question={'Wie endet folgendes Zitat?'}
		partialQuote={'Wenn Oma Glück hat...'}
		correctAnswer={'kann sie grossmutter werden'}
		author={'Thien-Minh Ngo'}
		advance={advance}
	/>
)

export const IntegrationsTest = ({advance}: {advance: (isCorrect: boolean) => void}) => (
	<Order
		title={'Integrations Test: '}
		question={'In welcher Reihenfolge werden die folgenden Fragen üblicherweise gestellt?'}
		answers={['Bist du Japaner', 'Kommst du aus Korea?', 'Häh?', 'Bist du Chinese??']}
		correctOrder={[3, 0, 1, 2]}
		advance={advance}
	/>
)