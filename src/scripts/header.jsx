import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
	    <header>
	      <h1>Meeting Cost Calculator <strong>2</strong></h1>
        <div className="sub-header text-right">
          <small>Build with <a href="https://facebook.github.io/react/" target="_blank">React</a> and ES2015</small>
        </div>
	    </header>
    );
  }
}
