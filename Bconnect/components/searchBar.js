import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  backgroundColor,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput placeholder="Caută o afacere" style={styles.searchInput} />
    </View>
  );
};

const styles = {
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 10,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 15,
  },
  searchInput: {
    backgroundColor: "#D2EBF4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    marginRight: 4,
  },
  filterButton: {
    backgroundColor: "#D2EBF4",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: 52,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  filterIcon: {
    color: "#000",
    backgroundColor: "#D2EBF4",
    borderRadius: 10,
  },
};

export default SearchBar; //homeScreen, categoriesScreen
