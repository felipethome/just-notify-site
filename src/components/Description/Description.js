import React from 'react';
import PropTypes from 'prop-types';

export default class Description extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    text: PropTypes.string,
    textColor: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
  };

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        textAlign: 'center',
      },

      title: {
        fontWeight: '500',
        fontSize: '35px',
        marginBottom: '20px',
        color: this.props.titleColor || '#212121',
      },

      text: {
        fontSize: '18px',
        color: this.props.textColor || '#424242',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <div style={styles.title}>{this.props.title}</div>
        <div style={styles.text}>{this.props.text}</div>
      </div>
    );
  }
}