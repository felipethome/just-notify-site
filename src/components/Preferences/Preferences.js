import React from 'react';
import PropTypes from 'prop-types';
import PreferencesScreen from '../PreferencesScreen';
import Description from '../Description';

export default class Preferences extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
        padding: '40px 0 40px 0',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <Description
          title="Customize your notifications"
          text="Let your notifications exactly the way you need"
        />
        <PreferencesScreen />
      </div>
    );
  }
}