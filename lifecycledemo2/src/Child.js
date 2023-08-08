import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { c_count: this.props.count };
  }
  static getDeriverdStateFromProps(props, state) {
    return { c_count: props.count };
  }
  render() {
    console.log("child render called");
    return <div>{this.state.c_count}</div>;
  }
}
