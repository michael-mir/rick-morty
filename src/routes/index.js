import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from '/common/constants/routes';
import CharacterPageContainer from '/containers/CharacterPage/CharacterPageContainer';
import EpisodePageContainer from '/containers/EpisodePage/EpisodePageContainer';
import LocationPageContainer from '/containers/LocationPage/LocationPageContainer';
import MainPageContainer from '/containers/MainPage/MainPageContainer';

const RootRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path={ROUTES.EPISODES}
        render={() => <MainPageContainer />}
      />
      <Route
        path={ROUTES.EPISODE}
        render={({ match: { params: { id } } }) => (
          <EpisodePageContainer id={id} />
        )}
      />
      <Route
        path={ROUTES.LOCATION}
        render={({ match: { params: { id } } }) => (
          <LocationPageContainer id={id} />
        )}
      />
      <Route
        path={ROUTES.CHARACTER}
        render={({ match: { params: { id } } }) => (
          <CharacterPageContainer id={id} />
        )}
      />
      <Route
        path={ROUTES.ROOT}
        render={() => <Redirect to={ROUTES.EPISODES} />}
      />
    </Switch>
  </BrowserRouter>
);

export default RootRouter;
