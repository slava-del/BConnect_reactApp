import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import SplashScreen from '../screens/splashScreen'
import OnboardingFinal from '../screens/onboardingFinal';
import AccountScreen from '../screens/accountScreen';
import MapViewScreen from '../screens/mapViewScreen';
import CategoriesScreen from '../screens/categoriesScreen';
import HomeScreen from '../screens/homeScreen';
import BusinessUserInfo from '../screens/businessUserInfo';
import BusinessInfoView from '../screens/businessInfoView';
import BusinessList from '../screens/businessList';
import BottomTabNavigator from '../components/navigationBar';
import AccountQ from '../screens/accountQ';




const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingFinal" component={OnboardingFinal} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MapViewScreen" component={MapViewScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AccountQ" component={AccountQ} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessUserInfo" component={BusinessUserInfo} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessInfoView" component={BusinessInfoView} options={{ headerShown: false }} /> 
        <Stack.Screen name="BusinessList" component={BusinessList} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

