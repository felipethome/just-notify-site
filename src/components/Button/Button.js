import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import classes from './Button.css';

export default class Button extends React.Component {
  static displayName = 'Button';

  static propTypes = {
    children: PropTypes.any,
    classes: PropTypes.object,
    link: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    classes: {},
  };

  render() {
    const {
      children,
      classes: userClasses,
      link,
      style,
      ...others
    } = this.props;

    let elem;

    if (link) {
      elem = (
        <a
          {...others}
          className={cn(classes.button, userClasses.button)}
          style={style}
        >
          {children}
        </a>
      );
    }
    else {
      elem = (
        <button
          {...others}
          className={cn(classes.button, userClasses.button)}
          style={style}
        >
          {this.props.children}
        </button>
      );
    }

    return elem;
  }
}