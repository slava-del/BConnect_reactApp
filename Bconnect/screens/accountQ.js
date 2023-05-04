import React, { useState } from "react";
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
      aspect: [4, 3],
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

  function onSave() {
    // Save data
  }

  // deletes an image
  function deleteGalleryImage(index) {
    let updatedGalleryImages = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(updatedGalleryImages);
  }

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            /* Add your navigation logic here */
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={29} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Editează informația</Text>
      </View>
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
                  <Text style={styles.deleteImageButtonText}>X</Text>
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
                  <Text style={styles.deleteImageButtonText}>X</Text>
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
          <TouchableOpacity style={styles.addButton} onPress={handleOpenPopup}>
            <Text style={styles.leftAlignedText}>Adaugă</Text>
          </TouchableOpacity>
          <EditPopup
            isVisible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </View>
        <Text style={styles.adviceText}>
          Asigurați-vă că răspundeți la întrebări în descrierea afacerii pentru
          a o face mai ușor de citit și utilă.
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
    marginBottom: 15,
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
    borderRadius: 5,
  },
  deleteImageButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  saveButton: {
    alignSelf: "center",
    backgroundColor: "#096780",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButtonText: {
    color: "white",
    paddingHorizontal: 60,
    fontSize: 16,
  },
});
