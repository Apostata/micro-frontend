import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';

window.renderOrder = (containerId, history=null, Store=null) => {
    ReactDOM.render(
      <Provider store={Store}><App history={history} /></Provider>,
      document.getElementById(containerId),
    );
};

  
window.unmountOrder = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
