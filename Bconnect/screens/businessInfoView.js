import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import businessesData from "../data/businessesData";

const BusinessInfo = ({ route }) => {
  const { business } = route.params;
  const filteredData = businessesData.find((item) => item.id === business.id);

  // for image open
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (image) => {
    setSelectedImage(image);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };

  // navigation
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("BusinessList", { subcategory: filteredData.category.subcategory })}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        {/*Background image and logo */}
        <View style={styles.backgroundImageContainer}>
          {filteredData.coverImage && (
            <TouchableOpacity
              onPress={() => openImage(filteredData.coverImage)}
            >

              <Image
                source={{ uri: filteredData.coverImage }}
                style={styles.backgroundImage}
              />
            </TouchableOpacity>
          )}
          {filteredData.logo && (
            <TouchableOpacity onPress={() => openImage(filteredData.logo)}>
              <Image
                source={{ uri: filteredData.logo }}
                style={styles.logoImage}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          {filteredData.title && (
            <Text style={styles.title}>{filteredData.title}</Text>
          )}
        </View>

        {/* Main Content Container */}
        <View style={styles.mainContentContainer}>
          {/* Contact information */}
          <View style={styles.contactContainer}>
            <Text style={styles.contactTitle}>Date de contact</Text>
            <View style={styles.phoneContainer}>
              <MaterialCommunityIcons name="phone" size={24} color="black" />
              {filteredData.phoneNumbers &&
                filteredData.phoneNumbers.map((number, index) => (
                  <Text key={index} style={styles.phoneNumber}>
                    {number}
                  </Text>
                ))}
            </View>
            {filteredData.email && (
              <View style={styles.emailContainer}>
                <MaterialCommunityIcons name="email" size={24} color="black" />
                <Text style={styles.email}>{filteredData.email}</Text>
              </View>
            )}
          </View>

          {/* About us */}
          <View style={styles.contactContainer}>
            <Text style={styles.aboutTitle}>Cine suntem?</Text>
            <Text style={styles.aboutText}>{filteredData.textCineSuntem}</Text>

            <Text style={styles.aboutTitle}>Ce facem?</Text>
            <Text style={styles.aboutText}>{filteredData.textCeFacem}</Text>

            <Text style={styles.aboutTitle}>Care este scopul nostru?</Text>
            <Text style={styles.aboutText}>
              {filteredData.textCareEsteScopulNostru}
            </Text>
          </View>
          {/* Gallery */}
          <View style={styles.contactContainer}>
            <Text style={styles.galleryTitle}>Galerie</Text>
            <View style={styles.galleryImagesContainer}>
              {filteredData.images &&
                filteredData.images.map((image, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => openImage(image)}
                  >
                    <Image
                      source={{ uri: image }}
                      style={styles.galleryImage}
                    />
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        </View>

        {/* Full-screen image modal*/}
        <Modal
          visible={!!selectedImage}
          onRequestClose={closeImage}
          animationType="fade"
          transparent
        >
          <View style={styles.fullScreenImageContainer}>
            <TouchableOpacity onPress={closeImage} style={styles.closeButton}>
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
            <Image
              source={{ uri: selectedImage }}
              style={styles.fullScreenImage}
            />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default BusinessInfo;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E3EAEC',
    zIndex: 1,
  },
  backgroundImageContainer: {
    position: "relative",
    height: 250,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  logoImage: {
    position: "absolute",
    bottom: -40,
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainContentContainer: {
    backgroundColor: "#E3EAEC",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -30,
    padding: 15,
  },
  contactContainer: {
    backgroundColor: "#E3EAEC",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  phoneNumber: {
    marginLeft: 10,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  email: {
    marginLeft: 10,
  },
  aboutContainer: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
  },
  galleryContainer: {
    marginBottom: 20,
  },
  galleryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  galleryImagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  galleryImage: {
    width: 100,
    height: 100,
    margin: 5,
  },
  fullScreenImageContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    bottom: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    zIndex: 1,
    backgroundColor: "#BADEF0",
    borderRadius: 10,
  },
  backButtonContainer: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 2,
  },
  editButtonContainer: {
    backgroundColor: "#BADEF0",
    borderRadius: 10,
    position: "absolute",
    bottom: 40,
    right: 10,
    zIndex: 2,
  },
});
