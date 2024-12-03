import React, { Component } from "react";

class CountCom extends Component {

    constructor() {
        super();
        this.state = {
            count:0
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
        // this.setState((prevState)=> ({empName:'rithesh s',empSal:prevState.empSal+5000}))
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
        // this.setState((prevState)=> ({empName:'rithesh s',empSal:prevState.empSal+5000}))
    }
    reset = () => {
        this.setState({count:0});
        // this.setState((prevState)=> ({empName:'rithesh s',empSal:prevState.empSal+5000}))
    }

    render() {
        return <div>
            <h2>This is My Task</h2>
            <p> count:{this.state.count }</p>
            <button type="button" onClick={() => this.increment()} class='btn btn-primary'>increment</button> 
            <button type="button" onClick={() => this.decrement()} class='btn btn-primary'>decrement</button>
            <button type="button" onClick={() => this.reset()} class='btn btn-primary'>reset</button>

        </div>
    }
}

export default CountCom;