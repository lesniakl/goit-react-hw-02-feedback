import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = e => {
    this.setState(prevState => {
      const { name } = e.target;
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={this.handleChange}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleChange}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleChange}>
          Bad
        </button>
        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>
        <span>Total:</span>
        <span>Positive feedback: </span>
      </>
    );
  }
}
