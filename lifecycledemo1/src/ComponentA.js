import React, { Component } from "react";
import ComponentB from "./ComponentB";
export default class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Ravi" };
    console.log("ComponentA Constructor Called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("ComponentA getDerivedStateFrom Called");
    return null;
  }
  render() {
    console.log("ComponentA render Called");
    return (
      <div>
        <div>{this.state.name}</div>
        <ComponentB />
      </div>
    );
  }
  componentDidMount() {
    console.log("ComponentA componentDidMount Called");
  }
}
