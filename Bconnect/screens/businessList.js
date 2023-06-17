import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LottieView from 'lottie-react-native';

import businessesData from "../data/businessesData";


const BusinessCard = ({ business, onPress }) => {
  // if locationJuridic is not available, use locationFizic
  const location = business.locationJuridic.length > 0 ? business.locationJuridic : business.locationFizic;

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.card}>
        <Card.Cover
          style={styles.coverImage}
          source={{ uri: business.coverImage }}
        />
        <Card.Content>
          <Title style={styles.title}>{business.title}</Title>
          <View>
            {location.map((loc, index) => (
              <Paragraph key={index} style={styles.location}>
                {loc}
              </Paragraph>
            ))}
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const BusinessList = ({ route }) => {
  const navigation = useNavigation();
  const subcategory = route.params?.subcategory || '';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Start loading list");
    const loadImages = async () => {
      await Promise.all(
        businessesData.map(async (business) => {
          try {
            await Image.prefetch(business.coverImage);
          } catch (err) {
            console.warn("Error prefetching image", err);
          }
        })
      );

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    loadImages();
  }, []);
  // Business filtering
  const businesses = businessesData.filter(business =>
    business.category.subcategory === subcategory
  );

  const handleCardPress = (business) => {
    navigation.navigate("BusinessInfoView", { business });
  };

  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("BottomTabNavigator", { screen: "CategoriesScreen" })}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {loading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            source={require('../assets/appGeneral/animationSplash.json')}
            autoPlay
            loop
          />
        </View>
      ) : businesses.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Image
            source={require('../assets/appGeneral/nothingImg.png')}
            style={styles.noDataImage}
          />
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Nu am găsit afaceri pentru această categorie.</Text>
        </View>
      ) : (
        <FlatList
          data={businesses}
          renderItem={({ item }) => (
            <BusinessCard
              key={item.id}
              business={item}
              onPress={() => handleCardPress(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.container}
        />
      )}
    </View>
  );
};

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
  pageContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 35,
  },
  container: {
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 18,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E3EAEC',
    zIndex: 1,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  noDataImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
  },
  coverImage: {
    width: "100%",
    height: 130,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#777",
  },
});
export default BusinessList;
