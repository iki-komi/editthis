import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Routes from './routes';

const UsableRoutes = Routes.filter(route => {
  return !route.isApi;
});

// Route definition component, define new pages here
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          {UsableRoutes.map((route, i) => {
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
