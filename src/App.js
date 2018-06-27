import React, { Component } from 'react';
import SquareContainer from './containers/SquareContainer';
import CalculatorContainer from './containers/CalculatorContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SquareContainer />
        <CalculatorContainer />
      </div>
    );
  }
}

export default App;
