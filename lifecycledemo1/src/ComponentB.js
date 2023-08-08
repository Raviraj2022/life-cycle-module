import React, { Component } from "react";

export default class ComponentB extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Raj" };
    console.log("ComponentB Constructor Called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("ComponentB getDerivedStateFromProps Called");
    return null;
  }
  render() {
    console.log("ComponentB render Called");
    return (
      <div>
        <div>{this.state.name}</div>
      </div>
    );
  }
  componentDidMount() {
    console.log("ComponentB ComponentDidMount Called");
  }
}
