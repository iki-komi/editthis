import React from 'react';
import {Link} from 'react-router-dom';
import Upload from '../pages/upload';
import Home from '../pages/home';
import Styles from '../styles';

class App extends React.Component {
  render() {
    return (
      <div style={{
        width: '100%',
        height: '5%',
        background: Styles.grey,
        display: 'flex'
      }}>
        <Link
          to='/upload'
          style={{}}
        >
          Upload
        </Link>
        <Link to='/users' style={{}}>Users</Link>
      </div>
    );
  }
}

export default App;
