// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   Modal,
//   ScrollView,
//   KeyboardAvoidingView,
// } from "react-native";

// export default function App() {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [cineSuntem, setCineSuntem] = useState("");
//   const [ceFacem, setCeFacem] = useState("");
//   const [careEsteScopul, setCareEsteScopul] = useState("");

//   const handleSubmit = () => {
//     console.log(`Cine suntem? ${cineSuntem}`);
//     console.log(`Ce facem? ${ceFacem}`);
//     console.log(`Care este scopul nostru? ${careEsteScopul}`);
//     setModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => setModalVisible(true)}>
//         <Text style={styles.editButton}>Editează</Text>
//       </TouchableOpacity>
//       <Modal visible={modalVisible} animationType="slide">
//         <KeyboardAvoidingView
//           style={styles.containerKeyboard}
//           behavior="padding"
//         >
//           <ScrollView>
//             <View style={styles.modalContainer}>
//               <Text style={styles.modalTitle}>Editează secțiunea despre</Text>
//               <Text style={styles.modalDescription}>
//                 Răspunde la următoarele întrebări:
//               </Text>
//               <Text style={styles.modalTitleQuestions}>Cine suntem?</Text>
//               <TextInput
//                 multiline={true}
//                 textAlignVertical="top"
//                 numberOfLines={4}
//                 maxLength={1000}
//                 value={cineSuntem}
//                 onChangeText={(text) => setCineSuntem(text)}
//                 style={styles.modalInput}
//               />

//               {cineSuntem.length === 0 && (
//                 <Text style={styles.modalTempText}>Minim 50 de caractere</Text>
//               )}

//               <Text style={styles.modalTitleQuestions}>Ce facem?</Text>
//               <TextInput
//                 multiline={true}
//                 textAlignVertical="top"
//                 numberOfLines={4}
//                 maxLength={1000}
//                 value={ceFacem}
//                 onChangeText={(text) => setCeFacem(text)}
//                 style={styles.modalInput}
//               />

//               {ceFacem.length === 0 && (
//                 <Text style={styles.modalTempText}>Minim 50 de caractere</Text>
//               )}

//               <Text style={styles.modalTitleQuestions}>
//                 Care este scopul nostru?
//               </Text>
//               <TextInput
//                 multiline={true}
//                 textAlignVertical="top"
//                 numberOfLines={4}
//                 maxLength={1000}
//                 value={careEsteScopul}
//                 onChangeText={(text) => setCareEsteScopul(text)}
//                 style={styles.modalInput}
//               />

//               {careEsteScopul.length === 0 && (
//                 <Text style={styles.modalTempText}>Minim 50 de caractere</Text>
//               )}

//               <TouchableOpacity onPress={handleSubmit}>
//                 <Text style={styles.submitButton}>Salvează</Text>
//               </TouchableOpacity>
//             </View>
//           </ScrollView>
//         </KeyboardAvoidingView>
//       </Modal>
//     </View>
//   );
// }
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

const EditPopup = ({ isVisible, onClose }) => {
  const [cineSuntem, setCineSuntem] = useState("");
  const [ceFacem, setCeFacem] = useState("");
  const [careEsteScopul, setCareEsteScopul] = useState("");

  const handleSubmit = () => {
    console.log(`Cine suntem? ${cineSuntem}`);
    console.log(`Ce facem? ${ceFacem}`);
    console.log(`Care este scopul nostru? ${careEsteScopul}`);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <KeyboardAvoidingView style={styles.containerKeyboard} behavior="padding">
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

            {cineSuntem.length === 0 && (
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

            {ceFacem.length === 0 && (
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

            {careEsteScopul.length === 0 && (
              <Text style={styles.modalTempText}>Minim 50 de caractere</Text>
            )}

            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.submitButton}>Salvează</Text>
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
