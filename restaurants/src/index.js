import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';

window.renderRestaurants = (containerId, history=null, Store=null) => {
    ReactDOM.render(
      <Provider store={Store}><App history={history} /></Provider>,
      document.getElementById(containerId),
    );
};

  
window.unmountRestaurants = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};


// if(window.Restaurants === undefined) {
//   import('./store').then(Store=>{
//     window.renderRestaurants('root', null, Store.default);
//   })
// }