import React from 'react';
import BannerLogo from '../BannerLogo';
import BannerNotifications from '../BannerNotifications';

export default class Banner extends React.Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        background: '#212121',
        paddingBottom: '20px',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <BannerLogo />
        <BannerNotifications />
      </div>
    );
  }
}