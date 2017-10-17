import React from 'react';
import PropTypes from 'prop-types';

import classes from './Footer.css';

export default class Footer extends React.Component {
  static displayName = 'Footer';

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    return (
      <div className={classes.container} style={this.props.style}>
        <div className={classes.textContainer}>
          JustNotify is not affiliated with or endorsed by Google. Gmail and Inbox by Gmail are trademarks of Google Inc.
          <br />Copyright © 2017 Felipe Thomé. All rights reserved.
        </div>
      </div>
    );
  }
}