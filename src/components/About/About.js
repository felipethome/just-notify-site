import React from 'react';
import PropTypes from 'prop-types';
import Description from '../Description';

import classes from './About.css';

export default class About extends React.Component {
  static displayName = 'About';

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    return (
      <div className={classes.container}>
        <Description
          title="Just Notify"
          text="The goal of Just Notify is to supply a simple native application for MacOS that can keep you up to date with your emails. I decided to develop it because most of the email applications want to be a full client which in the current days I consider to be unnecessary since the browser has the same features, and sometimes even more than a desktop client. The only thing I needed was a robust way to be notified about incoming emails and I didn't want to be stuck with the same browser."
          className={classes.description}
        />
      </div>
    );
  }
}