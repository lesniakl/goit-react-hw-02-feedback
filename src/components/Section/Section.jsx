import React, { Component } from 'react';
import css from './Section.module.css';

export default class Section extends Component {
  render() {
    return (
      <section className={css.sectionContainer}>
        <h2 className={css.title}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}
