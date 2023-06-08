import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('OnboardingSt'); 
        }, 7000); 
    }, []);

  return (
    <LottieView 
      source={require('../assets/appGeneral/animationSplash.json')}  
      autoPlay
      loop
    />
  );
}