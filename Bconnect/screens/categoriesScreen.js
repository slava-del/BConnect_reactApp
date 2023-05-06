import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  UIManager,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/searchBar";
import categoriesData from '../data/categoriesData'

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const navigation = useNavigation();

  const toggleCategory = (categoryId) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedCategories((prevState) => {
      if (prevState.includes(categoryId)) {
        return prevState.filter((id) => id !== categoryId);
      } else {
        return [...prevState, categoryId];
      }
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>Categoriile afacerilor</Text>
      </View> */}

      <View style={styles.categoriesContainer}>
        {categoriesData.map((category) => {
          const isExpanded = expandedCategories.includes(category.id);
          const rotation = new Animated.Value(isExpanded ? 1 : 0);

          useEffect(() => {
            Animated.timing(rotation, {
              toValue: isExpanded ? 1 : 0,
              duration: 200,
              useNativeDriver: true,
            }).start();
          }, [isExpanded]);

          const rotate = rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "180deg"],
          });

          return (
            <View key={category.id} style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() => toggleCategory(category.id)}
                style={styles.category}
              >
                <Animated.View style={{ transform: [{ rotate }] }}>
                  <MaterialIcons name="expand-more" size={24} color="black" />
                </Animated.View>
                <Text style={styles.categoryText}>{category.title}</Text>
                <Image source={category.iconPath} style={styles.icon}/>
                {/* <Image source={category.iconPath} style={styles.icon} /> */}
              </TouchableOpacity>

              {isExpanded && (
                <View style={styles.subcategoriesContainer}>
                  {category.subcategories.map((subcategory, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        // console.log("Subcategory pressed:", subcategory);
                        navigation.navigate("BusinessList")
                      }}
                      style={styles.subcategoryButton}
                    >
                      <Text style={styles.subcategoryText}>{subcategory}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </View>
      </ScrollView>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // titleContainer: {
  //   paddingHorizontal: 16,
  //   paddingVertical: 8,
  // },
  // title: {
  //   fontSize: 30,
  //   fontWeight: "bold",
  //   textAlign: 'center',
  // },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  categoryContainer: {
    marginBottom: 16,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 16,
    maxWidth: "100%",
  },
  categoryText: {
    marginLeft: 7,
    fontSize: 18,
  },
  icon: {
    marginLeft: "auto",
    width: 24,
    height: 24,
  },
  subcategoriesContainer: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  subcategoryButton: {
    marginBottom: 8,
    backgroundColor: "#D2EBF4",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  subcategoryText: {
    fontSize: 16,
  },
});

