import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Button from '../Button';
import Banner from '../Banner';
import Popover from '../Popover';
import Preferences from '../Preferences';
import About from '../About';
import Support from '../Support';
import Footer from '../Footer';

import classes from './Root.css';

export default class Root extends React.Component {
  static displayName = 'Root';

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    const styles = {
      container: {
        width: '100%',
      },

      navbarButton: {
        backgroundColor: 'transparent',
        marginRight: '10px',
      },
    };

    const navbarActions = [
      <Button
        key="3"
        link
        href="#support"
        classes={{button: classes.navbarButton}}
      >
        Support
      </Button>,
    ];

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <Navbar actions={navbarActions} />
        <Banner />
        <Popover />
        <Preferences />
        <About />
        <Support />
        <Footer />
      </div>
    );
  }
}