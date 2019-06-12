import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';



import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CartReducer from './store/reducers/cartReducer';
import userReducer from './store/reducers/userReducer'
import ProductReducer from './store/reducers/productsReducer'

const rootReducer = combineReducers({
    CartReducer,
    userReducer,
    ProductReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* les reducers qui existent dans rootReducer constituent store*/

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

/* provider 1 etape donne acces store */

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();


