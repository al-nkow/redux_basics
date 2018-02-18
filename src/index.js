import React from 'react';
import ReactDOM from 'react-dom';

// npm i --save react-redux
import { Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux';

// combineReducers - мержит редьюсеры в один редьюсер

// import reducer from './store/reducer'
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctrl: counterReducer, // ctr - может быть любое имя
    res: resultReducer
});
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
