import React,{Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {View} from 'react-native';
import Home from './components/Home';
import Library from './components/Library';
import Search from './components/Search';
import LoginForm from './components/LoginForm';

const Router = StackNavigator({
  //  LoginForm: {screen : LoginForm},
    Home: {screen : Home},
    Library: {screen: Library},
    Search: {screen: Search}
});

export default Router;




