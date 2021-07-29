import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from '/common/constants/routes';

const RootRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exec path={ROUTES.ROOT} render={() => <span />} />
    </Switch>
  </BrowserRouter>
);

export default RootRouter;
