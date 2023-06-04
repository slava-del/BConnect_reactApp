import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PopupReg from './popupRegister';

import backgroundImage from '../assets/backgroundOnSt.jpg';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground 
        style={styles.imageBackground}
        source={backgroundImage}
        blurRadius={0}
      >
        <StatusBar style="auto" />

        {!modalVisible && (
          <Text style={styles.firstText}>Alătură-te comunității noastre de utilizatori</Text>
        )}

        {!modalVisible && (
          <Text style={styles.secondText}>
            Descoperă cele mai bune afaceri locale din Republica Moldova
          </Text>
        )}

        {!modalVisible && (
          <Text style={styles.thirdText}>
            Simplu și ușor
          </Text>
        )}

        {!modalVisible && (
          <TouchableOpacity
            style={styles.exploreBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.exploreBtnTxt}>Înregistrează-te</Text>
          </TouchableOpacity>
        )}

        <PopupReg
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    backgroundColor: '#3A0CA3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "black",
    width: "90%",
    textAlign: "left",
    marginBottom: 10,
    lineHeight: 34,
    top: 150,
  },
  secondText: {
    width: "90%",
    color: "black",
    fontSize: 19,
    fontWeight: "bold",
    lineHeight: 24,
    top: 150,
  },
  thirdText: {
    width: "90%",
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 24,
    top: 150,
  },
  exploreBtn: {
    width: "65%",
    backgroundColor: '#3F95EB',
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    bottom: 80,
  },
  exploreBtnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});