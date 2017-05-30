import React from 'react';
import Button from '../button';
import getShadow from '../getShadow';

class Logo extends React.Component {

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
      },

      logo: {
        width: '70%',
        height: 'auto',
      },

      description: {
        fontSize: '20px',
        textAlign: 'center',
        marginTop: '30px',
        color: '#FFF',
      },

      buttonContainer: {
        marginTop: '30px',
      },

      button: {
        background: '#43A047',
        boxShadow: getShadow('2dp'),
        fontSize: '20px',
        textTransform: 'none',
        height: 'auto',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <img style={styles.logo} src="img/logo.png" />
        <div style={styles.description}>
          The power of MacOS notifications to your Gmail/Inbox accounts
        </div>
        <div style={styles.buttonContainer}>
          <Button style={styles.button}>Buy on App Store</Button>
        </div>
      </div>
    );
  }

}

export default Logo;