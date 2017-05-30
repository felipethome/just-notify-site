import React from 'react';

export default class Preferences extends React.Component {

  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
      },

      image: {
        width: '500px',
        height: 'auto',
      },
    };

    return (
      <div style={styles.container}>
        <div>
          <img style={styles.image} src="img/preferences.png" />
        </div>
      </div>
    );
  }

}