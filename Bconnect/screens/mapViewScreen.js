import React, { useState, useCallback, useRef } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MapView, { Marker, Callout } from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import LottieView from 'lottie-react-native';

const MapViewScreen = ({ route, navigation }) => {
  const [coordinates, setCoordinates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null); 
  const mapRef = useRef(null); // Reference to the MapView component

  useFocusEffect(
    useCallback(() => {
      getGeocodes(route.params?.locations);
    }, [route.params])
  );

  const getGeocodes = async (locations) => {
    // Check if locations are provided
    if (locations && locations.length) {
      const coor = [];
      for (const location of locations) {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAd_hU6yDLrbmJ_8C5cwlJ-CpfayjeKzfs`);
        coor.push(response.data.results[0].geometry.location);
      }
      setCoordinates(coor);
      setLoading(false);

      // fit to the markers after loading
      mapRef.current.fitToCoordinates(coor, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    } else {
      // No locations provided, set the map to focus on Moldova
      mapRef.current.animateToRegion({
        latitude: 47.411631,
        longitude: 28.369885,
        latitudeDelta: 3.5,
        longitudeDelta: 3.5,
      }, 1000); // The duration of the animation can be set here
      setLoading(false);
    }
  }

  const handleMarkerPress = (location, index) => {
    setSelectedLocation({ index, location });
  }

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <LottieView source={require('../assets/appGeneral/animationSplash.json')} autoPlay loop />
        </View>
      ) : (
        <MapView 
          style={{ flex: 1 }}
          ref={mapRef}
          initialRegion={{
            latitude: 47.411631,
            longitude: 28.369885,
            latitudeDelta: 3.5,
            longitudeDelta: 3.5,
          }}
        >
          {coordinates.map((coordinate, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: coordinate.lat,
                longitude: coordinate.lng
              }}
              onPress={() => handleMarkerPress(route.params.locations[index], index)}
            >
              <Callout>
                <Text>{"Sediul " + (index + 1) + ": " + route.params.locations[index]}</Text>
              </Callout>
            </Marker>
          ))}
        </MapView>
      )}
    </View>
  );
}

export default MapViewScreen;

const styles = StyleSheet.create({
  loadingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
})
