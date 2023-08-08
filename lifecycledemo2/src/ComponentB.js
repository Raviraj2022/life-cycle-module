import React, { Component } from "react";

export default class ComponentB extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Shiv" };
    console.log("ComponentB constructor Called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("ComponentB getDerivedStateFrom Called");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("ComponentB shouldCompUpd Called");
    if (this.state.name !== nextState.name) {
      return true;
    }
    return false;
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
    console.log("ComponentB componentDidMount Called");
  }
}
