import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

export class App extends React.Component {
	render() {
		return (
			<Header/>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#mccApp"));
