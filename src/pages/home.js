import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        Welcome!
        <Link to='/upload'>Upload</Link>
      </div>
    );
  }
}

export default Home;
