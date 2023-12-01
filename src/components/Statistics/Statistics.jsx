import Notification from 'components/Notification/Notification';
import React, { Component } from 'react';

export default class Statistics extends Component {
  render() {
    if (!this.props.total) {
      return <Notification message="There is no feedback" />;
    }
    return (
      <>
        <span>Good: {this.props.good}</span>
        <span>Neutral: {this.props.neutral}</span>
        <span>Bad: {this.props.bad}</span>
        <span>Total: {this.props.total}</span>
        <span>Positive feedback: {this.props.positivePercentage}</span>
      </>
    );
  }
}
