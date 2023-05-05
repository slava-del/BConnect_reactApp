import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import businessesData from "../data/businessesData";

const BusinessCard = ({ business, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.card}>
        <Card.Cover
          style={styles.coverImage}
          source={{ uri: business.coverImage }}
        />
        <Card.Content>
          <Title style={styles.title}>{business.title}</Title>
          <Paragraph style={styles.location}>{business.location}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const BusinessList = () => {
  const navigation = useNavigation();

  const handleCardPress = (business) => {
    navigation.navigate("BusinessInfoView", { business });
  };

  return (
    <View style={styles.pageContainer}>
      <FlatList
        data={businessesData}
        renderItem={({ item }) => (
          <BusinessCard
            key={item.id}
            business={item}
            onPress={() => handleCardPress(item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 35,
  },
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 20,
  },
  coverImage: {
    width: "100%",
    height: 130,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#777",
  },
});
export default BusinessList;
