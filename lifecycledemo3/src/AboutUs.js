import React, { Component } from "react";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Your views about us" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert("Your review:\n " + this.state.value);
    this.setState({ value: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="review">Review Us</label>
          <br />
          <textarea
            id="review"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    );
  }
}
