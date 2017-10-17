import React from 'react';
import PropTypes from 'prop-types';

import classes from './PreferencesScreen.css';

export default class PreferencesScreen extends React.Component {
  static displayName = 'PreferencesScreen';

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    return (
      <div className={classes.container} style={this.props.style}>
        <div>
          <img className={classes.image} src="img/preferences.png" />
        </div>
      </div>
    );
  }
}