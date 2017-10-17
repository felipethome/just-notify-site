import React from 'react';
import PropTypes from 'prop-types';

import classes from './Description.css';

export default class Description extends React.Component {
  static displayName = 'Description';

  static propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.string,
    textColor: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
  };

  render() {
    return (
      <div id={this.props.id} className={classes.container}>
        <div className={classes.title}>{this.props.title}</div>
        <div className={classes.text}>{this.props.text}</div>
      </div>
    );
  }
}