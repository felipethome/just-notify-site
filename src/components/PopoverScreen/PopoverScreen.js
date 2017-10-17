import React from 'react';
import PropTypes from 'prop-types';

import classes from './PopoverScreen.css';

export default class PopoverScreen extends React.Component {
  static displayName = 'PopoverScreen';

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    return (
      <div className={classes.container}>
        <div>
          <img className={classes.image} src="img/popover.png" />
        </div>
      </div>
    );
  }
}