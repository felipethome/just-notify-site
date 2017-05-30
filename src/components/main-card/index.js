import React from 'react';
import Logo from '../logo';
import Notifications from '../notifications';

export default class MainCard extends React.Component {

  render() {
    const styles = {
      container: {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        background: 'linear-gradient(90deg, #212121, #424242)',
        paddingBottom: '20px',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <Logo />
        <Notifications />
      </div>
    );
  }

}