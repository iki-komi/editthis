import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Routes from './routes';

// Route definition component, define new pages here
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          {Object.keys(Routes).map((name, i) => {
            const route = Routes[name];
            return (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={`route-${i}`}
              />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
