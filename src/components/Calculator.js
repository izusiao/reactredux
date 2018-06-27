import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            //value1: 0,
            value2: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
        this.setState({
            value2: parseInt(event.target.value, 10)
        })
    }
    handleFirstInputChange = event => {
        const { onChangeVal1 } = this.props;
        onChangeVal1(parseInt(event.target.value, 10))
    }
    handleSecondInputChange = event => {
        const { onChangeVal2 } = this.props;
        onChangeVal2(parseInt(event.target.value, 10))
    }
    render() {
        const { plus, value1, value2 } = this.props;
        return(
            <div>
                Calculator
                <br />
                <input type="number" id="value1" value={value1} onChange={this.handleFirstInputChange} />
                <button onClick={plus}>+</button>
                <input type="number" id="value2" onChange={this.handleSecondInputChange} value={value2} />
            </div>
        );
    }
}

export default Calculator;