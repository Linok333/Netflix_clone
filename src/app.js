import React from 'react';
import { JumbotronContainer } from './containers/jumbotron';
import './app.css';
import { FooterContainer } from './containers/footer';
import { FaqsContainer } from './containers/faqs';

export default function App() {
	return (
		<>
			<JumbotronContainer/>
			<FaqsContainer/>
			<FooterContainer/>
		</>
	);
}
