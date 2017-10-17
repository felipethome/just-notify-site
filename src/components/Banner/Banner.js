import React from 'react';
import PropTypes from 'prop-types';
import BannerLogo from '../BannerLogo';
import BannerNotifications from '../BannerNotifications';

import classes from './Banner.css';

export default class Banner extends React.Component {
  static displayName = 'Banner';

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    return (
      <div className={classes.container}>
        <BannerLogo />
        <BannerNotifications />
      </div>
    );
  }
}