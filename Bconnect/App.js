import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingSt from './screens/onboardingStart';
import OnboardingTr from './screens/onboardingTr';
import OnboardingFinal from './screens/onboardingFinal';
import PopupReg from './screens/popupRegister';
import AccountQ from './screens/accountQ';
import BottomTabNavigator from './screens/appNavigator';
import mapViewScreen from './screens/mapViewScreen';
import CategoriesScreen from './screens/categoriesScreen';
import HomeScreen from './screens/homeScreen';




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnboardingSt" component={OnboardingSt} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingTr" component={OnboardingTr} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingFinal" component={OnboardingFinal} options={{ headerShown: false }} />
        <Stack.Screen name="PopupReg" component={PopupReg} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} /> 
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="mapViewScreen" component={mapViewScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AccountQ" component={AccountQ} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


