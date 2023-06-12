import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import businessesData from "../data/businessesData";

const CardSections = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Start loading homeScreen content");
    const loadImages = async () => {
      await Promise.all(
        businessesData.map(async (business) => {
          await Image.prefetch(business.coverImage);
        })
      );
      setLoading(false);
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <LottieView source={require('../assets/appGeneral/animationSplash.json')} autoPlay loop />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>

        <View style={styles.logoTextContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.fixedText}>BConnect</Text>
        </View>

        {Object.entries(businessesData.reduce((sections, business) => {
          const subcategory = business.category.subcategory;
          if (!sections[subcategory]) {
            sections[subcategory] = {
              id: subcategory,
              title: subcategory,
              cards: []
            }
          }
          sections[subcategory].cards.push({
            id: business.id,
            imageUrl: business.coverImage,
            cardText: business.title,
            cardDescription: business.greetText
          });
          return sections;
        }, {})).map(([_, section]) => (
          <View key={section.id} style={styles.section}>
            <View style={styles.titleContainer}>
              <View style={styles.line}></View>
              <Text style={styles.title}>{section.title}</Text>
              <View style={styles.line}></View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {section.cards.map((card) => (
                <View key={card.id} style={styles.card}>
                  <Image source={{ uri: card.imageUrl }} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.cardText}>{card.cardText}</Text>
                    <Text style={styles.cardDescription}>
                      {card.cardDescription}
                    </Text>
                  </View>
                  <View style={styles.buttons}>
                    <TouchableOpacity style={styles.locationButton}>
                      <MaterialCommunityIcons name="map-marker" size={18} color="#00273D"/>
                      <Text style={styles.buttonText}>Locație</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.callButton}
                      onPress={() => navigation.navigate('BusinessInfoView', { business: card })}
                    >
                      <MaterialCommunityIcons name="information" size={18} color="#00273D" />
                      <Text style={styles.buttonText}>Detalii</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


export default CardSections;






const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 30,
    paddingHorizontal: 16,
  },
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
  logoTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 20,
  },
  logo: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  fixedText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },

  section: {
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  line: {
    height: 2,
    backgroundColor: "#000",
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: "bold",
    textAlign: "center"
  },
  card: {
    width: 350,
    height: 320,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "space-between",

  },
  image: {
    width: "100%",
    height: 160,
  },
  cardText: {
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    marginVertical: 5,
    paddingHorizontal: 10,
    // fontStyle: 'italic',
    fontSize: 12,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32BADE",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 30,
    minWidth: 150,
    marginHorizontal: 2.5,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32BADE",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 30,
    minWidth: 150,
    marginHorizontal: 2.5,
  },
  buttonText: {
    color: "#00273D",
    fontWeight: "bold",
    marginLeft: 5,
    textAlign: "center",
    justifyContent: "center",
  },
  textContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
};

