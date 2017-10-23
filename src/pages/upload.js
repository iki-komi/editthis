import React from 'react';
import {connect} from 'react-redux';
import Store from '../stores/index';

class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  onClick() {
    console.log('clicked');
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    console.log('props', window.__APP_INITIAL_STATE__);
    return (
      <div>
        <div style={{width: 10, height: 10, background: 'red'}} onClick={() => {this.onClick()}}/>
        <p>
          This is an upload page, {this.state.counter}
          Another counter {Store.getState()}
        </p>
      </div>
    );
  }
}

//Upload = connect()(Stores.counter);

export default Upload;
