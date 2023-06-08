import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImageZoom from 'react-native-image-pan-zoom';



export default function BusinessInfo() {
  const [businessData, setBusinessData] = useState({});
  const [aboutCineSuntem, setAboutCineSuntem] = useState("");
  const [aboutCeFacem, setAboutCeFacem] = useState("");
  const [aboutCareEsteScopul, setAboutCareEsteScopul] = useState("");

  // for image open
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (image) => {
    setSelectedImage(image);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (selectedImage) {
      Image.getSize(selectedImage, (width, height) => {
        const screenWidth = Dimensions.get('window').width;
        const scaleFactor = width / screenWidth;
        const imageHeight = height / scaleFactor;
        setImageSize({ width: screenWidth, height: imageHeight });
      });
    }
  }, [selectedImage]);

  // for navigation thru screens
  const navigation = useNavigation();

  //for sync of user data input
  async function loadData() {
    try {
      const savedData = await AsyncStorage.getItem("businessData");
      if (savedData !== null) {
        setBusinessData(JSON.parse(savedData));
        setAboutCineSuntem(JSON.parse(savedData).aboutCineSuntem);
        setAboutCeFacem(JSON.parse(savedData).aboutCeFacem);
        setAboutCareEsteScopul(JSON.parse(savedData).aboutCareEsteScopul);
      } else {
        console.log("No data found");
      }
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  useEffect(() => {
    loadData();

    const unsubscribe = navigation.addListener('focus', () => {
      loadData();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <ScrollView>

        {/* Section 2: Background image and logo */}
        <View style={styles.backgroundImageContainer}>
          {businessData.coverImage && (
            <TouchableOpacity
              onPress={() => openImage(businessData.coverImage)}
            >
              <Image
                source={{ uri: businessData.coverImage }}
                style={styles.backgroundImage}
              />
            </TouchableOpacity>
          )}
          {businessData.profileImage && (
            <TouchableOpacity
              onPress={() => openImage(businessData.profileImage)}
            >
              <Image
                source={{ uri: businessData.profileImage }}
                style={styles.logoImage}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Section 3: Title */}
        <View style={styles.titleContainer}>
          {businessData.title && (
            <Text style={styles.title}>{businessData.title}</Text>
          )}
        </View>

        {/* Main Content Container */}
        <View style={styles.mainContentContainer}>
          {/* Section 4: Contact information */}
          <View style={styles.contactContainer}>
            <Text style={styles.contactTitle}>Date de contact</Text>
            <View style={styles.phoneContainer}>
              <MaterialCommunityIcons name="phone" size={24} color="black" />
              {businessData.phoneNumbers &&
                businessData.phoneNumbers.map((number, index) => (
                  <Text key={index} style={styles.phoneNumber}>
                    {number}
                  </Text>
                ))}
            </View>
            {businessData.email && (
              <View style={styles.emailContainer}>
                <MaterialCommunityIcons name="email" size={24} color="black" />
                <Text style={styles.email}>{businessData.email}</Text>
              </View>
            )}
            {/* Location information */}
            {businessData.locations && (
              <View style={styles.locationContainer}>
                <MaterialCommunityIcons name="map-marker" size={24} color="black" />
                <View style={styles.locations}>
                  {businessData.locations.map((loc, index) => (
                    <Text key={index} style={styles.location}>
                      <Text style={styles.boldText}>{"Sediul " + (index + 1) + ": "}</Text>
                      {loc.trim()}
                    </Text>
                  ))}
                </View>
              </View>
            )}

          </View>

          {/* Section 5: About us */}
          <View style={styles.contactContainer}>
            <Text style={styles.aboutTitle}>Cine suntem?</Text>
            <Text style={styles.aboutText}>{aboutCineSuntem}</Text>

            <Text style={styles.aboutTitle}>Ce facem?</Text>
            <Text style={styles.aboutText}>{aboutCeFacem}</Text>

            <Text style={styles.aboutTitle}>Care este scopul nostru?</Text>
            <Text style={styles.aboutText}>{aboutCareEsteScopul}</Text>
          </View>
          {/* Section 6: Gallery */}
          <View style={styles.contactContainer}>
            <Text style={styles.galleryTitle}>Galerie</Text>
            <View style={styles.galleryImagesContainer}>
              {businessData.galleryImages &&
                businessData.galleryImages.map((image, index) => (
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

        {/* Full-screen image modal */}
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
            <ImageZoom
              cropWidth={Dimensions.get('window').width}
              cropHeight={Dimensions.get('window').height}
              imageWidth={imageSize.width}
              imageHeight={imageSize.height}
            >
              <Image
                source={{ uri: selectedImage }}
                style={{ ...styles.fullScreenImage, width: imageSize.width, height: imageSize.height }}
              />
            </ImageZoom>
          </View>
        </Modal>
      </ScrollView>
      {/* Section 7: Edit button */}
      <View style={styles.editButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AccountQ")}>
          <MaterialCommunityIcons
            name="pencil"
            size={30}
            color="#00273D"
            padding={10}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
locationContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
},
locations: {
  flex: 1,  
  marginLeft: 10,
},
location: {
    width: '90%',
    marginTop: 5, 
},
aboutContainer: {
    marginBottom: 20,
},
boldText: {
    fontWeight: 'bold', 
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
    margin: 6,
    borderRadius: 5,
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
