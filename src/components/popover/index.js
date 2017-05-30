import React from 'react';

export default class Popover extends React.Component {

  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
      },

      image: {
        width: '300px',
        height: 'auto',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <div>
          <img style={styles.image} src="img/popover.png" />
        </div>
      </div>
    );
  }

}