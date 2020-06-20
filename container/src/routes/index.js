import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {routes} from './routes';

const Routes = props =>{
    const renderRoutes = ()=>{
        return routes.map((route, idx)=>{
            return <Route key={idx} exact={route.exact} path={route.path} component={route.component}/>
        })
    }
    return(
        <Switch>
            {renderRoutes()}
        </Switch>
    )
}

export default Routes;

