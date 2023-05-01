import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polygon } from 'react-native-maps';



const MoldovaMap = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 47.411631,
        longitude: 28.369885,
        latitudeDelta: 2.2,
        longitudeDelta: 2.2,
      }}
      minZoomLevel={7}
      maxZoomLevel={16}
      scrollEnabled={true}
      zoomEnabled={true}
      zoomTapEnabled={true}
      zoomControlEnabled={true}
      showsUserLocation={true}
    >
    </MapView>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <MoldovaMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
