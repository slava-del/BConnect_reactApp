// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import businessesData from '../data/businessesData';

// const BusinessInfo = ({ route }) => {
//   const { business } = route.params;
//   const filteredData = businessesData.find((item) => item.id === business.id);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{filteredData.title}</Text>
//       <Image style={styles.logo} source={{ uri: filteredData.logo }} />
//       <Image style={styles.coverImage} source={{ uri: filteredData.coverImage }} />
//       <Text style={styles.sectionTitle}>Phone Numbers:</Text>
//       {filteredData.phoneNumbers.map((phoneNumber, index) => (
//         <Text key={index}>{phoneNumber}</Text>
//       ))}
//       <Text style={styles.sectionTitle}>Email:</Text>
//       <Text>{filteredData.email}</Text>
//       <Text style={styles.sectionTitle}>Cine Suntem:</Text>
//       <Text>{filteredData.textCineSuntem}</Text>
//       <Text style={styles.sectionTitle}>Ce Facem:</Text>
//       <Text>{filteredData.textCeFacem}</Text>
//       <Text style={styles.sectionTitle}>Care Este Scopul Nostru:</Text>
//       <Text>{filteredData.textCareEsteScopulNostru}</Text>
//       <Text style={styles.sectionTitle}>Images:</Text>
//       <View style={styles.imagesContainer}>
//         {filteredData.images.map((image, index) => (
//           <Image key={index} style={styles.image} source={{ uri: image }} />
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 10,
//   },
//   coverImage: {
//     width: '100%',
//     height: 200,
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   imagesContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   image: {
//     width: 80,
//     height: 80,
//     marginRight: 5,
//     marginTop: 5,
//   },
// });

// export default BusinessInfo;

import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import businessesData from '../data/businessesData';

const BusinessInfo = ({ route }) => {
  const { business } = route.params;
  const filteredData = businessesData.find((item) => item.id === business.id);
  const {
    coverImage,
    logo,
    title,
    phoneNumbers,
    email,
    textCineSuntem,
    textCeFacem,
    textCareEsteScopulNostru,
    images,
    useState
  } = filteredData;

  // for image open
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (image) => {
    setSelectedImage(image);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };

  // for navigation thru screens
  const navigation = useNavigation();


  return (
    <View>
      {/* Section 1: Back button */}
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => console.log("Go back")}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Section 2: Background image and logo */}
        <View style={styles.backgroundImageContainer}>
          {coverImage && (
            <TouchableOpacity
              onPress={() => openImage(coverImage)}
            >
              <Image
                source={{ uri: coverImage }}
                style={styles.backgroundImage}
              />
            </TouchableOpacity>
          )}
          {logo && (
            <TouchableOpacity
              onPress={() => openImage(logo)}
            >
              <Image
                source={{ uri: logo }}
                style={styles.logoImage}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Section 3: Title */}
        <View style={styles.titleContainer}>
          {title && (
            <Text style={styles.title}>{title}</Text>
          )}
        </View>

        {/* Main Content Container */}
        <View style={styles.mainContentContainer}>
          {/* Section 4: Contact information */}
          <View style={styles.contactContainer}>
            <Text style={styles.contactTitle}>Date de contact</Text>
            <View style={styles.phoneContainer}>
              <MaterialCommunityIcons name="phone" size={24} color="black" />
              {phoneNumbers &&
                phoneNumbers.map((number, index) => (
                  <Text key={index} style={styles.phoneNumber}>
                    {number}
                  </Text>
                ))}
            </View>
            {email && (
              <View style={styles.emailContainer}>
                <MaterialCommunityIcons name="email" size={24} color="black" />
                <Text style={styles.email}>{email}</Text>
              </View>
            )}
          </View>

          {/* Section 5: About us */}
          <View style={styles.contactContainer}>
            <Text style={styles.aboutTitle}>Cine suntem?</Text>
            <Text style={styles.aboutText}>{textCineSuntem}</Text>

            <Text style={styles.aboutTitle}>Ce facem?</Text>
            <Text style={styles.aboutText}>{textCeFacem}</Text>

            <Text style={styles.aboutTitle}>Care este scopul nostru?</Text>
            <Text style={styles.aboutText}>{textCareEsteScopulNostru}</Text>
          </View>
          {/* Section 6: Gallery */}
          <View style={styles.contactContainer}>
            <Text style={styles.galleryTitle}>Galerie</Text>
            <View style={styles.galleryImagesContainer}>
              {galleryImages &&
                galleryImages.map((images, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => openImage(images)}
                  >
                    <Image
                      source={{ uri: images }}
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
            <Image
              source={{ uri: selectedImage }}
              style={styles.fullScreenImage}
            />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
export default BusinessInfo;

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