import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import classes from './BannerLogo.css';

export default class BannerLogo extends React.Component {
  static displayName = 'BannerLogo';

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    return (
      <div className={classes.container}>
        <img className={classes.logo} src="img/logo.png" />
        <div className={classes.description}>
          The power of MacOS notifications to your Gmail/Inbox accounts
        </div>
        <div className={classes.buttonContainer}>
          <Button classes={{button: classes.button}}>Buy on App Store</Button>
        </div>
      </div>
    );
  }
}