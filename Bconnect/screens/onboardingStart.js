import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../assets/backgroundOnSt.jpg';

export default function App() {
  return (
    <ImageBackground 
      style={styles.container}
      source={backgroundImage}
      blurRadius={0}
    >

      <StatusBar style="auto" />
      <Text style={styles.firstText}>Deschideți orizonturile cu aplicația noastră</Text>
      <Text style={styles.secondText}>
        Găsește cu ușurință afaceri în apropierea ta
      </Text>
      <Text style={styles.thirdText}>
        Continuă călătoria cu un simplu click
      </Text>
      <TouchableOpacity
          style={styles.exploreBtn}
        >
          <Text style={styles.exploreBtnTxt}>Accept oportunitatea</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A0CA3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width:274,
    height:274,
  },
  firstText:{
    fontSize:33,
    fontWeight:"bold",
    color:"black",
    width:"90%",
    textAlign:"left",
    marginBottom:10,
    lineHeight:34,
    top: 110,
  },
  secondText: {
    width:"90%",
    color:"black",
    fontSize:25,
    fontWeight:"bold",
    lineHeight:24,
    top: 110,
  },
  thirdText: {
    width:"90%",
    color:"black",
    fontSize:19,
    fontWeight:"bold",
    lineHeight:24,
    top: 110,
  },
  exploreBtn:{
    width:"65%",
    backgroundColor:'#3F95EB',
    height:50,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    position: 'absolute',
    bottom: 80,
  },
  exploreBtnTxt: {
    color:"black",
    fontWeight: "bold",
    fontSize: 15,
  },
});