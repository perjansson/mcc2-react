import React from 'react';
import {Link} from 'react-router';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="row animated fadeIn">
        <div className="row">
          <div className="col-xs-12 text-center" role="nav">
            <Link to="/meetings/new" activeClassName="active" className="btn btn-primary btn-mcc"><i className="fa fa-clock-o"></i> Meetings</Link>
            <Link to="/meetings" activeClassName="active" className="btn btn-primary btn-mcc"><i className="fa fa-list"></i> Top list</Link>
            <Link to="/about" activeClassName="active" className="btn btn-primary btn-mcc"><i className="fa fa-users"></i> About</Link>
          </div>
        </div>
      </nav>
    )
  }
}
