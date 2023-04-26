import React from 'react';
import { StyleSheet, View } from 'react-native';
import AccountConfig from './screens/accountConfig';

export default function App() {
  return (
    <View style={styles.container}>
      <AccountConfig />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});