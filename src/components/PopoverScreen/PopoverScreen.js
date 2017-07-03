import React from 'react';
import PropTypes from 'prop-types';

export default class PopoverScreen extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  };

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