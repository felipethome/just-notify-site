import React from 'react';
import MainCard from '../main-card';
import Navbar from '../navbar';
import Button from '../button';
import FirstCard from '../first-card';
import SecondCard from '../second-card';
import ThirdCard from '../third-card';
import Footer from '../footer';

class Root extends React.Component {

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
          bgColor="#424242"
          hasShadow
        />
        <MainCard />
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <Footer />
      </div>
    );
  }

}

export default Root;