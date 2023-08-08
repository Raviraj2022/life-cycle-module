import React, { Component } from "react";
import Child from "./Child";
export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState((currState) => ({ count: currState.count + 1 }));
  }
  render() {
    console.log("Parent render called");
    return (
      <div>
        <div>Parent</div>
        <div>
          <Child count={this.state.count} />
        </div>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
