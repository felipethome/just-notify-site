import React from 'react';
import PropTypes from 'prop-types';
import Description from '../Description';

import classes from './Support.css';

export default class Support extends React.Component {
  static displayName = 'Support';

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    return (
      <div className={classes.container}>
        <Description
          id="support"
          title="Support"
          text="justnotifyapp@gmail.com"
          className={classes.description}
        />
      </div>
    );
  }
}