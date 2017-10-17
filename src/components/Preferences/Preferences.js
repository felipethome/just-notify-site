import React from 'react';
import PropTypes from 'prop-types';
import PreferencesScreen from '../PreferencesScreen';
import Description from '../Description';

import classes from './Preferences.css';

export default class Preferences extends React.Component {
  static displayName = 'Preferences';

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    return (
      <div className={classes.container} style={this.props.style}>
        <div className={classes.description}>
          <Description
            title="Customize your notifications"
            text="Let your notifications exactly the way you need"
          />
        </div>
        <PreferencesScreen />
      </div>
    );
  }
}