import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cardSectionsData } from "../components/homeCardsData";

const CardSections = () => {
  return (
    <View style={styles.container}>
      
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
      
      <View style={styles.logoTextContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.fixedText}>BConnect</Text>
      </View>
      
        {cardSectionsData.map((section) => (
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
                  <Text style={styles.cardText}>{card.cardText}</Text>
                  <Text style={styles.cardDescription}>
                    {card.cardDescription}
                  </Text>
                  <View style={styles.buttons}>
                    <TouchableOpacity style={styles.locationButton}>
                      <MaterialCommunityIcons
                        name="map-marker"
                        size={18}
                        color="#00273D"
                      />
                      <Text style={styles.buttonText}>Locație</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton}>
                      {/* <MaterialCommunityIcons name="phone" size={18} color="#00273D" /> */}
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

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 30,
    paddingHorizontal: 0,
  },
  
  logoTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10, 
    paddingLeft: 20, // added padding to create space between screen edge and content
  },
  logo: {
    marginRight: 10, // added margin to create space between logo and text
    width: 20, 
    height: 20, 
  },
  fixedText: {
    fontSize: 18, 
    fontWeight: "bold", 
    textAlign: "left", // aligns text to the left of screen
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
  },
  card: {
    width: 350,
    height: 320,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    overflow: "hidden",
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
    paddingVertical: 5,
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
    minWidth: 110,
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
    minWidth: 190,
    marginHorizontal: 2.5,
  },
  buttonText: {
    color: "#00273D",
    fontWeight: "bold",
    marginLeft: 5,
    textAlign: "center",
    justifyContent: "center",
  },
};

export default CardSections;
