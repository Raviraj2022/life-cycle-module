import React, { Component } from "react";
import ComponentB from "./ComponentB";
export default class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Ravi" };
    this.handleChange = this.handleChange.bind(this);
    console.log("ComponentA constructor Called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("ComponentA getDerivedState Called");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("ComponentA shouldComponUpd Called");
    if (this.state.name !== nextState.name) {
      return true;
    }
    return false;
  }
  handleChange(e) {
    console.log("ComponentA HandleChan Called");
    this.setState({ name: "Ravi Raj" });
  }
  render() {
    console.log("ComponentA render Called");
    return (
      <div>
        <div>{this.state.name}</div>
        <div>
          <ComponentB />
        </div>
        <button onClick={this.handleChange}>Click Me</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("ComponentA componentDidMount Called");
  }
}
