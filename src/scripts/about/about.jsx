import React from 'react';

export default class Toplist extends React.Component {
  render() {
    return (
      <div>
        <div className="row about">
          <div className="col-xs-12 col-md-5">
            <img src={'/src/images/yo_dawg.jpg'} alt="yo_dawg" className="center-block img-responsive img-rounded"/>
          </div>
          <div className="col-xs-12 col-md-7">
            I'm building Meeting cost calculator mostly to try out and learn different frameworks, techniques and patterns. But also little bit because I think quite a lot of meetings are a waste of time. Some of them are good, some of them are necessary, but some of them are just a waste of time and money.
          </div>
        </div>
      </div>
    )
  }
}
