import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'
import App from './App';

import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit'
import reducer from './widget/store';

const store = configureStore({
    reducer:  {
        products:reducer
    }
})
const ReduxApp = ()=>{
    return (<Provider store={store}>
            <App/>
        </Provider>)
}
ReactDOM.hydrate(<ReduxApp />, document.getElementById('root'));


export default ReduxApp