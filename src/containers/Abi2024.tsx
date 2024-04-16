import { PropsWithChildren } from 'react';
import { Card, Container, Content, Subtitle, Title } from '../components';


const Abi2024 = () => {
	return (
		<Container>
			<Card>
				<Content>
					<Title>Abi 2024</Title>
					<div className="flex flex-col gap-4 items-start animate-[glow_7s_infinite]">
						<p className="text-h5 font-bold animate-[glow_7s_infinite]">Thiên Minh...</p>
						<div className="ml-10 mr-12 text-h6 gap-2 flex flex-col animate-[glow_7s_infinite]">
							<p>...Deutscher <span className="text-slate-400 italic text-[16px]">#Migrationshintergrund</span>, ...</p>
							<p>...Dichter, ...</p>
							<p>...Denker, ...</p>
						</div>
						<p className="text-h5 self-end animate-[glow_7s_infinite]">... Abiturient</p>
						<p className="text-slate-400 text-sm self-end">
							Du <s className="italic">bist</s> <b>kannst werden</b> was du <s className="italic">isst</s> <b>auch immer werden willst!</b>
						</p>
						<p className="text-slate-400 text-sm self-end flex flex-col items-end">
							<s className="italic">Lass es dir schmecken!</s>
							<p><b> Du schaffst das! </b><span className="italic">(glauben wir...)</span></p>
						</p>
					</div>
				</Content>
			</Card>
		</Container>
	);
};

export default Abi2024
