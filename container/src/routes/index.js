import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {routes} from './routes';

const Routes = props =>{
    const renderRoutes = ()=>{
        return routes.map((route, idx)=>{
            const useActions = route.useActions;
            return(
                <Route 
                    key={idx} 
                    exact={route.exact} 
                    path={route.path}  
                    render={()=><route.component useActions={useActions}/>}
                />
            );
        })
    }
    return(
        <Switch>
            {renderRoutes()}
        </Switch>
    )
}

export default Routes;

