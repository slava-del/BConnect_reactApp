import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
} from "react-native";

const EditPopup = ({
  isVisible,
  onClose,
  cineSuntem,
  setCineSuntem,
  ceFacem,
  setCeFacem,
  careEsteScopul,
  setCareEsteScopul,
}) => {
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (cineSuntem.length >= 50 && ceFacem.length >= 50 && careEsteScopul.length >= 50) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [cineSuntem, ceFacem, careEsteScopul]);

  const handleSubmit = () => {
    if (!submitDisabled) {
      console.log(`Cine suntem? ${cineSuntem}`);
      console.log(`Ce facem? ${ceFacem}`);
      console.log(`Care este scopul nostru? ${careEsteScopul}`);
      setCineSuntem(cineSuntem);
      setCeFacem(ceFacem);
      setCareEsteScopul(careEsteScopul);
      onClose();
    } else {
      Alert.alert('Avertisment!', 'Toate câmpurile trebuie să conțină minim 50 caractere');
    }
  };


  return (
    <Modal visible={isVisible} animationType="slide">
      <KeyboardAvoidingView
        style={styles.containerKeyboard}
        behavior="height"
        keyboardVerticalOffset={20}
      >
        <ScrollView>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Editează secțiunea despre</Text>
            <Text style={styles.modalDescription}>
              Răspunde la următoarele întrebări:
            </Text>
            <Text style={styles.modalTitleQuestions}>Cine suntem?</Text>
            <TextInput
              multiline={true}
              textAlignVertical="top"
              numberOfLines={4}
              maxLength={1000}
              value={cineSuntem}
              onChangeText={(text) => setCineSuntem(text)}
              style={styles.modalInput}
            />

            {cineSuntem.length < 50 && (
              <Text style={styles.modalTempText}>Minim 50 de caractere</Text>
            )}

            <Text style={styles.modalTitleQuestions}>Ce facem?</Text>
            <TextInput
              multiline={true}
              textAlignVertical="top"
              numberOfLines={4}
              maxLength={1000}
              value={ceFacem}
              onChangeText={(text) => setCeFacem(text)}
              style={styles.modalInput}
            />

            {ceFacem.length < 50 && (
              <Text style={styles.modalTempText}>Minim 50 de caractere</Text>
            )}

            <Text style={styles.modalTitleQuestions}>
              Care este scopul nostru?
            </Text>
            <TextInput
              multiline={true}
              textAlignVertical="top"
              numberOfLines={4}
              maxLength={1000}
              value={careEsteScopul}
              onChangeText={(text) => setCareEsteScopul(text)}
              style={styles.modalInput}
            />

            {careEsteScopul.length < 50 && (
              <Text style={styles.modalTempText}>Minim 50 de caractere</Text>
            )}

            <TouchableOpacity onPress={handleSubmit}>
              <Text style={[styles.submitButton, submitDisabled && styles.disabledButton]}>Salvează</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default EditPopup;

const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  editButton: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
  modalTitleQuestions: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: "top",
    alignSelf: "stretch",
  },
  submitButton: {
    backgroundColor: "#096780",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  modalTempText: {
    color: "#888",
    fontSize: 10,
    marginBottom: 5,
    marginTop: -10,
    textAlign: "right",
  },
  modalDescription: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 20,
    textAlign: "left",
  },
});
