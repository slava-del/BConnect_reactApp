import React, { useState, useCallback, useRef, useEffect } from 'react';
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

  const handleMarkerPress = (location, index) => {
    setSelectedLocation({ index, location });
  }

  useFocusEffect(
    useCallback(() => {
      getGeocodes(route.params?.locations);
    }, [route.params])
  );

  const getGeocodes = async (locations) => {
    setLoading(true); // Reset loading state
    setCoordinates([]); // Reset coordinates state

    // If locations are provided, get their geocodes
    if (locations && locations.length > 0) {
      const coor = [];
      try {
        for (const location of locations) {
          const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDTtJS8peqsr8koE0oFKLFdNjBj7a5jfc8`);
          coor.push(response.data.results[0].geometry.location);
        }
      } catch (error) {
        console.error(error);
      }
      setCoordinates(coor);
      setLoading(false); // Stop loading after geocodes are fetched

      // Delay the fitToCoordinates call even more
      setTimeout(() => {
        if (mapRef.current && coor.length > 0) {
          mapRef.current.fitToCoordinates(
            coor.map(c => ({ latitude: c.lat, longitude: c.lng })),
            {
              edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
              animated: true,
            }
          );
        }
      }, 2000);
    } else {
      // No locations provided, delay for 1 second before setting loading to false
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
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
          initialRegion={coordinates.length > 0 ? null : {
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
