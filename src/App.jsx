import React,{ Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    let dateString = this.state.newDeadline;
    if(this.isValidDate(dateString)) {
      this.setState({deadline:this.state.newDeadline });
    }
    this.refs._input.value = "";
  }

  isValidDate(dateString) {
    
    if(isNaN(Date.parse(dateString))) {
        return false;
    }

    if(Date.parse(dateString) - Date.parse(new Date()) < 0) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}/>
        <div>
          <input
            className="Deadline-input"
            placeholder='New date'
            onChange={event => this.setState({newDeadline: event.target.value})}
            ref = "_input"
          />
          <button onClick={() => this.changeDeadline()}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}


export default App;
