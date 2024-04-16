import Card from './Card';
import Container from './Container';

import { PropsWithChildren } from 'react';

const Title = ({children}: PropsWithChildren) => <p className="text-h5 iphone:text-body-1 mb-10">{children}</p>;

const Content = ({children}: PropsWithChildren) => <div className="flex flex-col items-start">{children}</div>;

const Subtitle = ({children}: PropsWithChildren) => <p className="py-4 iphone:pt-0 font-thin font-serif">{children}</p>;

const Question = ({question}: { question: string }) => <p className="text-h4 iphone:text-h5 font-bold text-left mb-6">{question}</p>

export { Card, Container, Title, Content, Subtitle, Question };