import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
// import { Provider } from 'react-redux';

// import store from './store';

import App from './App'


// import reportWebVitals from './reportWebVitals';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Provider>
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

// reportWebVitals();
