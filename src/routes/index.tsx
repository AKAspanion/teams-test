import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Add, Edit, Home, NotFound } from '../views';

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
        <Route exact path="/:id/edit">
          <Edit />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
