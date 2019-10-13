import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer  from './reducers/allreducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



const store = createStore(
    reducer,
    applyMiddleware(thunk)
    )
/*store.subscribe(() => {
    console.log('subscribe', store.getState())
})*/


ReactDOM.render(

    <App store={store} />,
    document.getElementById('root'));
serviceWorker.unregister();
