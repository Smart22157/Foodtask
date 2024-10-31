
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'C:/Users/Smart/Desktop/app/nextjs-dashboard/app/state/store';
import Home from 'C:/Users/Smart/Desktop/app/nextjs-dashboard/app/Home/page'; 


ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);