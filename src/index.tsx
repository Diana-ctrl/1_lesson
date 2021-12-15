import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithRedux from './AppWithRedux';
import * as serviceWorker from './serviceWorker';
import './ToDoList.module.css';
import { Provider } from 'react-redux';
import { store } from './store/store'

ReactDOM.render(<Provider store={store}>
    <AppWithRedux />  
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
