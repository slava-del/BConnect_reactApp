import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingSt from './screens/onboardingStart';
import OnboardingTr from './screens/onboardingTr';
import OnboardingFinal from './screens/onboardingFinal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnboardingSt" component={OnboardingSt} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingTr" component={OnboardingTr} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingFinal" component={OnboardingFinal} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
