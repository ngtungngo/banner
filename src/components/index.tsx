import Card from './Card';
import Container from './Container';

import { PropsWithChildren } from 'react';

const Title = ({children}: PropsWithChildren) => <p className="text-h5 iphone:text-body-1 font-bold">{children}</p>;

const Content = ({children}: PropsWithChildren) => <div className="flex flex-col items-start">{children}</div>;

const Subtitle = ({children}: PropsWithChildren) => <p className="py-4 iphone:pt-0 font-thin font-serif">{children}</p>;

export {Card, Container, Title, Content, Subtitle};