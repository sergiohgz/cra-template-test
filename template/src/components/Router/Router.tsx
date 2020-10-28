import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../config/routes';

const Router = (): JSX.Element => (
    <Switch>
        <Route exact path={routes.home}>
            <div>This is the home</div>
        </Route>
        <Redirect to={routes.home} />
    </Switch>
);

export default Router;
