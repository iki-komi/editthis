import React from 'react';

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
    return (
      <div>
        <div style={{width: 10, height: 10, background: 'red'}} onClick={() => {this.onClick()}}/>
        <p>
          This is an upload page, {this.state.counter}
        </p>
      </div>
    );
  }
}

export default Upload;
