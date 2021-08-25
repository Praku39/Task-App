import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/store/store';
import {Provider} from 'react-redux'
import {startSetUsers} from './redux/actions/userActions'
import './index.css';
import App from './App';

const store=configureStore();

store.dispatch(startSetUsers())

store.subscribe(()=>{
  console.log("store",store.getState())
})

const ele=(
  <Provider store={store}>
      <App/>
  </Provider>
)

ReactDOM.render(
  ele,
  document.getElementById('root')
);

