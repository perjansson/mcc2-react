require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../node_modules/animate.css/animate.min.css');
require('../../node_modules/font-awesome/css/font-awesome.min.css');
require('../../node_modules/react-select/dist/react-select.min.css');
require('../styles/style.css');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Header from './common/header.component';
import Navigation from './common/navigation.component';
import Meeting from './meeting/meeting.component';
import TopList from './toplist/toplist.component';
import About from './about/about.component';

export class App extends React.Component {
  render() {
    return (
      <div className="container text-center animated bounceInDown">
        <Header/>
        <Navigation/> {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}
        name="app"
        path="/">
      <IndexRoute component={Meeting}/>
      <Route component={Meeting}
          name="meeting"
          path="/meetings/new"/>
      <Route component={TopList}
          name="meetings"
          path="/meetings"/>
      <Route component={About}
          name="about"
          path="/about"/>
    </Route>
  </Router>
), document.querySelector('#mccApp'));
