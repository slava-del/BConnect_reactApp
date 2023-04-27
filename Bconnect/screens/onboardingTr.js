import React from 'react';
import { View, StyleSheet, ImageBackground, StatusBar } from 'react-native';

import backgroundImage from '../assets/backgroundOnTr.png';

export default function BackgroundPage() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor='transparent' barStyle='dark-content'/>
      <ImageBackground
        style={styles.backgroundImage}
        source={backgroundImage}
        blurRadius={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});