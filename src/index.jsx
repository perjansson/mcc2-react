require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
require("../node_modules/animate.css/animate.min.css")
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
