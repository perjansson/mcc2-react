import React from 'react';
import MeetingInput from './meeting-input.component';
import MeetingOutput from './meeting-output.component';
import CurrencyStore from './currency.store';

export default class Meeting extends React.Component {

  constructor() {
    super();
    this.CurrencyStore = new CurrencyStore();
    this.state =  {
      currencies: []
    };
  }

  componentDidMount() {
    var currencies = this.CurrencyStore.getCurrencies();
    this.setState({
      currencies: currencies
    })
  }

  render() {
    return (
      <div>
        <MeetingInput currencies={this.state.currencies}/>
        <MeetingOutput/>
      </div>
    )
  }
  
}
