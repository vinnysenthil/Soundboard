import React, { Component } from 'react';
import {View} from 'react-native';
import Home from './components/Home';
import Router from './Router';

import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

import { Provider } from "react-redux";
import firebase from 'firebase';

export default class App extends Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyDCkMW5L5vwhwt7qdH28ERwcP10W5k44jM",
      authDomain: "soundboard-1e98d.firebaseapp.com",
      databaseURL: "https://soundboard-1e98d.firebaseio.com",
      projectId: "soundboard-1e98d",
      storageBucket: "",
      messagingSenderId: "417114951872"
    };
      firebase.initializeApp(config);
}
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
      <Router/>

</Provider>

    );
  }
}

