import React from 'react';
import PropTypes from 'prop-types';
import PopoverScreen from '../PopoverScreen';
import Description from '../Description';

import classes from './Popover.css';

export default class Popover extends React.Component {
  static displayName = 'Popover';

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.description}>
          <Description
            title="Support to multiple accounts"
            text="You can have up to 5 Google accounts and configure each one separately"
          />
        </div>
        <PopoverScreen />
      </div>
    );
  }
}