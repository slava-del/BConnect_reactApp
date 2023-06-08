import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import EditPopup from "../components/accountQPopup";
import categoriesData from "../data/categoriesData";

export default function AccountConfiguration() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState([""]);
  const [email, setEmail] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState(Array(18).fill(null)); //max 18 images - section gallery
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [aboutCineSuntem, setAboutCineSuntem] = useState("");
  const [aboutCeFacem, setAboutCeFacem] = useState("");
  const [aboutCareEsteScopul, setAboutCareEsteScopul] = useState("");
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);

  const toggleEditPopup = () => {
    setIsEditPopupVisible(!isEditPopupVisible);
  };

  // For image uploading
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  // for popup open
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenPopup = () => {
    setModalVisible(true);
  };

  // for animating phone numbers
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  // Function to handle image picker
  async function pickImage(setImage) {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  // Add a new phone number input field
  function addPhoneNumber() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setPhoneNumbers([...phoneNumbers, ""]);
  }

  // Update a phone number in the array
  function updatePhoneNumber(index, value) {
    let updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index] = value;
    setPhoneNumbers(updatedPhoneNumbers);
  }

  // Delete a phone number
  function deletePhoneNumber(index) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setPhoneNumbers(phoneNumbers.filter((_, i) => i !== index));
  }

  // Add an image to the gallery
  function addToGallery(image) {
    setGalleryImages([...galleryImages, image]);
  }

  const navigation = useNavigation();
  function onSave() {
    saveData();
    navigation.navigate("BottomTabNavigator", { screen: "AccountScreen" })
  }

  async function saveData() {
    const businessData = {
      title,
      category,
      subCategory,
      phoneNumbers,
      email,
      profileImage,
      coverImage,
      galleryImages,
      aboutCineSuntem,
      aboutCeFacem,
      aboutCareEsteScopul,
    };

    try {
      await AsyncStorage.setItem("businessData", JSON.stringify(businessData));
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }

  async function loadData() {
    try {
      const savedData = await AsyncStorage.getItem("businessData");
      if (savedData !== null) {
        const businessData = JSON.parse(savedData);
        console.log("Loaded data:", businessData);

        setTitle(businessData.title || "");
        setCategory(businessData.category || "");
        setSubCategory(businessData.subCategory || "");
        setPhoneNumbers(businessData.phoneNumbers || [""]);
        setEmail(businessData.email || "");
        setProfileImage(businessData.profileImage || null);
        setCoverImage(businessData.coverImage || null);
        setGalleryImages(businessData.galleryImages || []);

        setAboutCineSuntem(businessData.aboutCineSuntem || "");
        setAboutCeFacem(businessData.aboutCeFacem || "");
        setAboutCareEsteScopul(businessData.aboutCareEsteScopul || "");
      } else {
        console.log("No data found");
      }
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  // deletes an image
  function deleteGalleryImage(index) {
    let updatedGalleryImages = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(updatedGalleryImages);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {/* Profile image section */}

        <Text style={styles.leftAlignedText}>Fotografia de profil</Text>
        <View style={styles.uploadBox}>
          <TouchableOpacity
            onPress={() => pickImage(setProfileImage)}
            style={styles.uploadProfileImageButton}
          >
            {profileImage ? (
              <>
                <Image
                  source={{ uri: profileImage }}
                  style={styles.uploadedProfileImage}
                />
                <TouchableOpacity
                  style={styles.deleteImageButton}
                  onPress={() => setProfileImage(null)}
                >
                  <Text style={styles.deleteImageButtonText}>×</Text>
                </TouchableOpacity>
              </>
            ) : (
              <MaterialCommunityIcons name="upload" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>

        {/* // Cover image section */}

        <Text style={styles.leftAlignedText}>Fotografia de copertă</Text>
        <View style={styles.uploadBox}>
          <TouchableOpacity
            onPress={() => pickImage(setCoverImage)}
            style={styles.uploadCoverImageButton}
          >
            {coverImage ? (
              <>
                <Image
                  source={{ uri: coverImage }}
                  style={styles.uploadedCoverImage}
                />
                <TouchableOpacity
                  style={styles.deleteImageButton}
                  onPress={() => setCoverImage(null)}
                >
                  <Text style={styles.deleteImageButtonText}>×</Text>
                </TouchableOpacity>
              </>
            ) : (
              <MaterialCommunityIcons name="upload" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <View style={styles.aboutSection}>
          <Text style={styles.leftAlignedText}>Despre</Text>
          <TouchableOpacity style={styles.addButton} onPress={toggleEditPopup}>
            <Text style={styles.leftAlignedText}>Adaugă</Text>
          </TouchableOpacity>
          <EditPopup
            isVisible={isEditPopupVisible}
            onClose={toggleEditPopup}
            cineSuntem={aboutCineSuntem}
            setCineSuntem={setAboutCineSuntem}
            ceFacem={aboutCeFacem}
            setCeFacem={setAboutCeFacem}
            careEsteScopul={aboutCareEsteScopul}
            setCareEsteScopul={setAboutCareEsteScopul}
          />
        </View>
        <Text style={styles.adviceText}>
        Îmbunătățește afacerea! Răspunde la întrebări și ajută vizitatorii să înțeleagă serviciile tale.
        </Text>

        <View style={styles.separator} />

        <Text style={styles.leftAlignedText}>Denumirea afacerii</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={setTitle}
          value={title}
          placeholder="Titlu"
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCategoryId}
            onValueChange={(itemValue) => {
              setSelectedCategoryId(itemValue);
              setCategory(
                categoriesData.find((cat) => cat.id === itemValue).title
              );
            }}
            style={styles.picker}
          >
            {categoriesData.map((category) => (
              <Picker.Item
                key={category.id}
                label={category.title}
                value={category.id}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={subCategory}
            onValueChange={(itemValue) => setSubCategory(itemValue)}
            style={styles.picker}
          >
            {categoriesData
              .find((category) => category.id === selectedCategoryId)
              .subcategories.map((subcategory, index) => (
                <Picker.Item
                  key={index}
                  label={subcategory}
                  value={subcategory}
                />
              ))}
          </Picker>
        </View>

        <View style={styles.separator} />

        <Text style={styles.leftAlignedText}>Date de contact</Text>
        {phoneNumbers.map((number, index) => (
          <View key={index} style={styles.phoneNumberRow}>
            <TextInput
              style={styles.phoneNumberInput}
              keyboardType="phone-pad"
              value={number}
              placeholder="Nr. de telefon"
              onChangeText={(value) => updatePhoneNumber(index, value)}
            />
            {index === phoneNumbers.length - 1 ? (
              <TouchableOpacity
                style={styles.addPhoneButton}
                onPress={addPhoneNumber}
              >
                <MaterialCommunityIcons name="plus" size={24} color="black" />
              </TouchableOpacity>
            ) : null}
            {phoneNumbers.length > 1 && (
              <TouchableOpacity
                style={styles.deletePhoneButton}
                onPress={() => deletePhoneNumber(index)}
              >
                <MaterialCommunityIcons name="minus" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        ))}
        <TextInput
          style={styles.inputField}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />

        <View style={styles.separator} />

        <View style={styles.galleryHeader}>
          <Text style={styles.leftAlignedText}>Galerie</Text>
          <TouchableOpacity
            style={styles.galleryUploadButton}
            onPress={() => pickImage(addToGallery)}
          >
            <Text style={styles.leftAlignedText}>Adaugă imagine</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.galleryContainer}>
          {galleryImages.map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.galleryImage} />
              <TouchableOpacity
                style={styles.deleteImageButton}
                onPress={() => deleteGalleryImage(index)}
              >
                <Text style={styles.deleteImageButtonText}>×</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.separator} />
        <TouchableOpacity onPress={onSave} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvează</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 15,
  },
  separator: {
    height: 2,
    backgroundColor: "black",
    marginVertical: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  backButtonContainer: {
    // top title section
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 5,
    paddingTop: 30,
  },
  leftAlignedText: {
    // titles for all sections
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  imageUpload: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
  uploadProfileImageButton: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadedProfileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 9,
  },
  uploadCoverImageButton: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadedCoverImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 9,
  },
  uploadIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  uploadText: {
    marginLeft: 5,
    fontSize: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  coverImageUpload: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  coverImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  aboutSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  adviceText: {
    fontSize: 15,
    // fontStyle: "italic",
    marginBottom: 10,
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  phoneNumberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  phoneNumberInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  addPhoneButton: {
    marginRight: 5,
  },
  deletePhoneButton: {
    marginLeft: 5,
  },
  deletePhoneButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  galleryUploadButton: {
    alignSelf: "flex-start",
    backgroundColor: "transparent",
    borderRadius: 5,
    marginBottom: 10,
  },
  galleryImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  galleryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    position: "relative",
    width: "32%",
    marginBottom: 10,
  },
  galleryImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 5,
  },
  galleryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteImageButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
  },
  deleteImageButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 11,
  },
  saveButton: {
    alignSelf: "center",
    backgroundColor: "#096780",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 35,
  },
  saveButtonText: {
    color: "white",
    paddingHorizontal: 60,
    fontSize: 16,
  },
});



