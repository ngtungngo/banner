import { PropsWithChildren } from 'react';
import { Card, Container, Content, Subtitle, Title } from '../components';

const YourFamily = {
	shout: (text: string) => <p className="text-h1 iphone:text-h5 font-bold">{text}</p>,
};



const Abi2024 = () => {
	return (
		<Container>
			<Card>
				<Content>
					<Title>Abi 2024</Title>
					<div className="flex flex-col gap-4 items-start">
						<p className="text-h5">Thien-Minh...</p>
						<div className="ml-10 mr-12 text-h6 gap-2 flex flex-col">
							<p>...Ausländer, ...</p>
							<p>...Dichter, ...</p>
							<p>...Denker, ...</p>
						</div>
						<p className="text-h5 self-end">... Abiturient</p>
						<p className="text-slate-400 text-sm self-end">
							Du <s className="italic">bist</s> <b>kannst werden</b> was du <s className="italic">isst</s> <b>auch immer werden willst!</b>
						</p>
						<p className="text-slate-400 text-sm self-end flex flex-col items-end">
							<s className="italic">Lass es dir schmecken!</s>
							<p><b> Du schaffst das! </b><span className="italic">(glaube ich...)</span></p>
						</p>
					</div>
				</Content>
			</Card>
		</Container>
	);
};

export default Abi2024
