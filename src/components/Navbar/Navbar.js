import React from 'react';
import PropTypes from 'prop-types';

import classes from './Navbar.css';

export default class Navbar extends React.Component {
  static displayName = 'Navbar';

  static propTypes = {
    actions: PropTypes.array,
    style: PropTypes.object,
  };

  render() {
    return (
      <div className={classes.container} style={this.props.style}>
        <div className={classes.menu}>
          {this.props.actions}
        </div>
      </div>
    );
  }
}