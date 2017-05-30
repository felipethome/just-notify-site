import React from 'react';
import Transition from 'react-inline-transition-group';
import getShadow from '../getShadow';

export default class Notifications extends React.Component {

  render() {
    const styles = {
      container: {
        width: '50%',
        textAlign: 'center',
      },

      imageContainer: {
        width: '400px',
        marginTop: '20px',
        boxShadow: getShadow('2dp'),
        borderRadius: '10px',
        backgroundSize: '400px',
        display: 'inline-block',
      },

      image1: {
        backgroundImage: 'url(img/informative.png)',
        height: '73px',
      },

      image2: {
        backgroundImage: 'url(img/action.png)',
        height: '73px',
      },

      image3: {
        backgroundImage: 'url(img/reply.png)',
        height: '148px',
      },

      base: {
        opacity: 0,
      },

      appear: {
        opacity: 1,
        transition: 'opacity 1000ms ease-in',
      }
    };

    const children = [
      <div key="1" style={Object.assign({}, styles.imageContainer, styles.image1)} />,
      <div key="2" style={Object.assign({}, styles.imageContainer, styles.image2)} />,
      <div key="3" style={Object.assign({}, styles.imageContainer, styles.image3)} />,
    ];

    return (
      <Transition
        childrenStyles={{
          base: styles.base,
          appear: styles.appear,
          enter: styles.appear,
        }}
        onPhaseEnd={this._handlePhaseEnd}
        style={Object.assign({}, styles.container, this.props.style)}
      >
        {children}
      </Transition>
    );
  }

}