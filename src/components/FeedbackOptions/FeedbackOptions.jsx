import React, { Component } from 'react';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map((option, index) => {
          return (
            <button
              key={index}
              type="button"
              name={option}
              onClick={this.props.onLeaveFeedback}
            >
              {option}
            </button>
          );
        })}
      </>
    );
  }
}
