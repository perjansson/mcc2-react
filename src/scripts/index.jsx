require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../node_modules/animate.css/animate.min.css")
require("../../node_modules/font-awesome/css/font-awesome.min.css")
require("../styles/style.css")
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Navigation from './navigation';
import Meeting from './meeting/meeting';

export class App extends React.Component {
	render() {
		return (
      <div className="container text-center animated bounceInDown">
				<Header/>
				<Navigation/>
				<Meeting/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#mccApp"));
