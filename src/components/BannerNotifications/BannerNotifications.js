import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-inline-transition-group';
import CancelablePromise from '../../CancelablePromise';

import classes from './BannerNotifications.css';

const imagePaths = [
  'img/informative.png',
  'img/action.png',
  'img/reply.png',
];

export default class BannerNotifications extends React.Component {
  static displayName = 'BannerNotifications';

  static propTypes = {
    style: PropTypes.object,
  };

  state = {
    show: false,
  };

  componentDidMount() {
    this._Cancelable = new CancelablePromise();

    // Load images before the animation so they are stored in the HTTP cache.
    const promises = imagePaths.map((src) => {
      return this._Cancelable.make(new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      }));
    });

    Promise.all(promises).then(() => {
      this.setState(() => ({show: true}));
    });
  }

  componentWillUnmount() {
    this._Cancelable.cance();
  }

  render() {
    const styles = {
      base: {
        opacity: 0,
        transform: 'translate(50px)',
      },

      appear: {
        opacity: 1,
        transform: 'translate(0px)',
        transition: 'opacity 800ms ease-in, transform 500ms',
      },
    };

    let children = [];

    if (this.state.show) {
      children = [
        <img key="1" src="img/informative.png" className={classes.image} />,
        <img key="2" src="img/action.png" className={classes.image} />,
        <img key="3" src="img/reply.png" className={classes.image} />,
      ];
    }

    return (
      <Transition
        childrenStyles={{
          base: styles.base,
          appear: styles.appear,
          enter: styles.appear,
        }}
        onPhaseEnd={this._handlePhaseEnd}
        className={classes.container}
      >
        {children}
      </Transition>
    );
  }
}