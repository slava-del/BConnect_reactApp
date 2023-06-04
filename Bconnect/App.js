import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStackNavigator from "./navigation/AppNavigator"


export default function App() {
  return <MainStackNavigator />;
}


