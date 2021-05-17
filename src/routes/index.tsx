import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Add, Home, NotFound } from '../views';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
