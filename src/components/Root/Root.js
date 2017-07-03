import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import Button from '../button';
import Banner from '../Banner';
import Popover from '../Popover';
import Preferences from '../Preferences';
import About from '../About';
import Footer from '../Footer';

export default class Root extends React.Component {
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
      <Button key="1" animate style={styles.navbarButton}>Home</Button>,
      <Button key="2" animate style={styles.navbarButton}>Privacy</Button>,
      <Button key="3" animate style={styles.navbarButton}>Support</Button>,
    ];

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <Navbar
          actions={navbarActions}
          bgColor="#212121"
          hasShadow
        />
        <Banner />
        <Popover />
        <Preferences />
        <About />
        <Footer />
      </div>
    );
  }
}