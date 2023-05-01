import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Caută o afacere"
        style={styles.searchInput}
      />
      <TouchableOpacity>
        <MaterialCommunityIcons name="filter-variant" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
};


const styles = {
    searchBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 0,
      paddingVertical: 10,
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20,
    },
    searchInput: {
      backgroundColor: '#F2F2F2',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 50,
      flex: 1,
      marginRight: 10,
    },
  };

export default SearchBar;     //homeScreen, categoriesScreen