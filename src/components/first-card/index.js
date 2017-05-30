import React from 'react';
import Popover from '../popover';
import Description from '../description';

export default class FirstCard extends React.Component {

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
        padding: '40px 0 40px 0',
        background: '#F6F6F6',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <Description
          title="Support to multiple accounts"
          text="You can have up to 5 Google accounts and configure each one separately"
        />
        <Popover />
      </div>
    );
  }

}