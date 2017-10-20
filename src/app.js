import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Upload from './pages/upload';
import Home from './pages/home';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/upload' component={Upload}/>
      </Switch>
    );
  }
}

export default App;
