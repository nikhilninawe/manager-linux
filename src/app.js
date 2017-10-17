import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyD0e2AjZuqDANzN9nJFVVJvt3R89O7Gpgc',
        authDomain: 'manager-f0f19.firebaseapp.com',
        databaseURL: 'https://manager-f0f19.firebaseio.com',
        projectId: 'manager-f0f19',
        storageBucket: 'manager-f0f19.appspot.com',
        messagingSenderId: '1070409858852'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
