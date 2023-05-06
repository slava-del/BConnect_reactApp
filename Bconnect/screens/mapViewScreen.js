// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// const MapViewScreen = () => {
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 47.036833,
//           longitude: 28.830962,
//           latitudeDelta: 0.005,
//           longitudeDelta: 0.005,
//         }}
//       >
//         <Marker
//           coordinate={{ latitude: 47.036833, longitude: 28.830962 }}
//           title={'Tekwill'}
//           description={'National ICT Excellence Center'}
//         />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default MapViewScreen;


import React from 'react';
import { Text, View } from 'react-native';

const UnavailablePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center' }}>
        Înca nu este disponibilă această funcțiune, lucrăm la ea...
      </Text>
    </View>
  );
};

export default UnavailablePage;