import React, { Component } from 'react';

class Square extends Component {
    constructor(){
        super();
        this.state = {
            color: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState ({
            color: event.target.value
        })
    }
    render() {
        const { color, onClick, onChangeButton, onChangeInput, button, input } = this.props
        const style = {
            height: "200px",
            width: "200px",
            backgroundColor: color,
        }
        return (
            <div>
                <div>Square - color changer</div>
                <div style={style}></div>
                <form>
                    <input 
                        type="checkbox" 
                        checked={button} 
                        onChange={() => onChangeButton(this.state.onButton)}
                    /> 
                    <label>Buttons</label><br />
                    <input 
                        type="checkbox" 
                        checked={input}
                        onChange={() => onChangeInput(this.state.onInput)}
                    />
                    <label>Input</label>
                </form>
                <div>
                    <button disabled={!button} onClick={() => onClick('red')}>Red</button>
                    <button disabled={!button} onClick={() => onClick('green')}>Green</button>
                    <button disabled={!button} onClick={() => onClick('blue')}>Blue</button>
                </div>
                <button disabled={!input} onClick={() => onClick(this.state.color)}>change</button>
                <input type="text" onChange={this.handleChange} value={this.state.color}></input>
                <hr />
            </div>
        );
    }
}
export default Square;