import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map((option, index) => {
          return (
            <button
              className={css.feedbackButton}
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
