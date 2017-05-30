import React from 'react';
import Description from '../description';

export default class ThirdCard extends React.Component {

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

      description: {
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <Description
          title="Just Notify"
          text="The goal of Just Notify is to supply a simple native application for MacOS that can keep you up to date with your emails. I decided do develop it because most of the applications related to email want to be a full client which in the current days I consider to be unnecessary since the browser has the same features, and sometimes even more, than a desktop client. Besides, the browser version will always contain the last features of Gmail and Inbox. So, the only thing I needed was a robust way to be notified about incoming emails. I wanted to be a native way, because I didn't want to be obligated to always use the same browser just because of an extension."
          style={styles.description}
        />
      </div>
    );
  }

}