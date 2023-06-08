import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('OnboardingSt'); // Replace with your desired first screen after splash
        }, 7000);  // Choose a duration appropriate for your animation
    }, []);

  return (
    <LottieView 
      source={require('../assets/appGeneral/animationSplash.json')}  
      autoPlay
      loop
    />
  );
}