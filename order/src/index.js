import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';

const ENV = process.env.NODE_ENV;

if(ENV !== 'standalone'){
  window.renderOrder = (containerId, history=null, Store=null) => {
      ReactDOM.render(
        <Provider store={Store}><App history={history} /></Provider>,
        document.getElementById(containerId),
      );
  };

    
  window.unmountOrder = containerId => {
      ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  };
} else {
  import('Store').then((store)=>{
    const Store = store.default;
    ReactDOM.render(
      <Provider store={Store}><App /></Provider>,
      document.getElementById('root'),
    );
  });
}
