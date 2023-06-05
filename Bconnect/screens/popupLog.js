import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LogPopup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTyped, setPasswordTyped] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigation = useNavigation();

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordTyped(true);
    if (text.length >= 8 && /[!@#$%^&*]/.test(text)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Parola trebuie să aibă cel puțin 8 caractere și să conțină un caracter special, cum ar fi !@#$%^&*"
      );
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text.trim() === "") {
      setEmailError("Adresa de email este obligatorie");
    } else if (!validateEmail(text)) {
      setEmailError("Te rog introdu o adresă de email validă");
    } else {
      setEmailError("");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleClose = () => {
    props.onClose();
    setPassword("");
    setShowPassword(false);
    setPasswordTyped(false);
    setPasswordError("");
    setEmailError("");
  };

  const handleRegisterClick = () => {
    handleClose();
    props.onRegisterClick();
  };

  return (
    <Modal visible={props.isVisible} animationType="slide" transparent={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Autentificare</Text>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              style={
                email.length > 0 && emailError
                  ? [styles.input, styles.invalidInput]
                  : styles.input
              }
              placeholder="ex: bconnect@gmail.com"
              value={email}
              onChangeText={handleEmailChange}
            />
            {emailError ? (
              <Text style={styles.warningText}>{emailError}</Text>
            ) : null}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Parolă</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[
                  styles.input,
                  passwordError ? styles.invalidInput : null,
                ]}
                placeholder="Parola ta"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={handlePasswordChange}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.showPasswordButton}
              >
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#777"
                />
              </TouchableOpacity>
            </View>
            {passwordTyped && passwordError ? (
              <Text style={styles.warningText}>{passwordError}</Text>
            ) : null}
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("BottomTabNavigator", { screen: "Home" })
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Autentifică-te</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRegisterClick}
            style={styles.registerButton}
          >
            <Text style={styles.registerButtonText}>
              Nu ai cont? Înregistrează-te
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = {
  modalContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    right: 10,
  },
  button: {
    width: "75%",
    backgroundColor: "#3F95EB",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  loginButton: {
    marginTop: 10,
  },
  loginButtonText: {
    fontSize: 14,
    color: "#3F95EB",
  },
  inputContainer: {
    marginBottom: 10,
    width: "100%",
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    textAlign: "left",
    fontStyle: "italic",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  showPasswordButton: {
    position: "absolute",
    right: 10,
  },
  invalidInput: {
    borderColor: "red",
    borderWidth: 1,
  },
  warningText: {
    color: "red",
    marginTop: 8,
  },
  registerButtonText: {
    marginTop: 10,
    fontSize: 14,
    color: "#3F95EB",
  },
};

export default LogPopup;