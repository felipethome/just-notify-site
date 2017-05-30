import React from 'react';
import Preferences from '../preferences';
import Description from '../description';

export default class SecondCard extends React.Component {

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
        <Preferences />
      </div>
    );
  }

}