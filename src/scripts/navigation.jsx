import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="row animated fadeIn">
        <div className="row">
          <div className="col-xs-12 text-center">
            <button className="btn btn-primary btn-mcc disabled"><i className="fa fa-clock-o"></i> Meeting</button>
            <button className="btn btn-primary btn-mcc disabled"><i className="fa fa-list"></i> Top list</button>
            <button className="btn btn-primary btn-mcc disabled"><i className="fa fa-users"></i> About</button>
          </div>
        </div>
      </nav>
    )
  }
}
