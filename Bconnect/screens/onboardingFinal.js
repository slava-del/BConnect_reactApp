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
      <Text style={styles.firstText}>Alătură-te comunității noastre de utilizatori</Text>
      <Text style={styles.secondText}>
        Descoperă cele mai bune afaceri locale din Republica Moldova
      </Text>
      <Text style={styles.thirdText}>
        Simplu și ușor
      </Text>
      <TouchableOpacity
          style={styles.exploreBtn}
        >
          <Text style={styles.exploreBtnTxt}>Înregistrează-te</Text>
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
    fontSize:27,
    fontWeight:"bold",
    color:"black",
    width:"90%",
    textAlign:"left",
    marginBottom:10,
    lineHeight:34,
    top: 150,
  },
  secondText: {
    width:"90%",
    color:"black",
    fontSize:19,
    fontWeight:"bold",
    lineHeight:24,
    top: 150,
  },
  thirdText: {
    width:"90%",
    color:"black",
    fontSize:15,
    fontWeight:"bold",
    lineHeight:24,
    top: 150,
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