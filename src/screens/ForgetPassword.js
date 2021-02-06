import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Auth } from "aws-amplify";

function ForgetPassword({ navigation }) {
  const [email, setEmail] = useState("");
  const [editableInput, setEditableInput] = useState(true);
  const [confirmationStep, setConfirmationStep] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getConfirmationCode = async () => {
    if (email.length > 4) {
      Auth.forgotPassword(email)
        .then(() => {
          setEditableInput(true);
          setConfirmationStep(true);
          setErrorMessage("");
        })
        .catch((err) => {
          if (err.message) {
            setErrorMessage(err.message);
          }
        });
    } else {
      setErrorMessage("Provide a valid email");
    }
  };

  const postNewPassword = async () => {
    Auth.forgotPasswordSubmit(email, code, newPassword)
      .then(() => {
        setErrorMessage("");
        navigation.navigate("SignIn");
      })
      .catch((err) => {
        if (err.message) {
          setErrorMessage(err.message);
        }
      });
  };

  return (
    <View>
      <View style={styles.squareStyle}></View>
      <Image
        style={styles.logoStyle}
        source={require("../../assets/cookburn.png")}
      />

      <Text style={styles.cookburnStyle}>CookBurn</Text>
      <Text
        style={styles.notregistStyle}
        onPress={() => navigation.navigate("Login")}
      >
        Back to Login{" "}
      </Text>

      <Text style={styles.emailStyle}> E-mail</Text>
      <TextInput
        style={styles.emailboxStyle}
        value={email}
        onChangeText={(text) => setEmail(text)}
        editable={editableInput}
        color="#FF5733"
        autoCapitalize="none"
        placeholder="Enter email"
        placeholderTextColor="#FF5733"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => getConfirmationCode()}
      >
        <Text style={styles.textStyle}>Reset password via email</Text>
      </TouchableOpacity>

      {confirmationStep && (
        <>
          <Text style={styles.verificationStyle}>
            {" "}
            Check your email for the confirmation code{" "}
          </Text>
          <TextInput
            value={code}
            onChangeText={(text) => setCode(text)}
            style={styles.verificationBoxStyle}
            autoCapitalize="none"
            placeholder="Enter Confirmation Code"
            placeholderTextColor="#FF5733"
          />
          <Text style={styles.passwordStyle}> New password </Text>
          <TextInput
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
            style={styles.passwordboxStyle}
            autoCapitalize="none"
            placeholder="Enter new password"
            autoCompleteType="password"
            placeholderTextColor="#FF5733"
          />
          <TouchableOpacity
            style={styles.confirmButtonStyle}
            onPress={() => postNewPassword()}
          >
            <Text style={styles.textStyle}>Submit new password</Text>
          </TouchableOpacity>
        </>
      )}
      <Text style={styles.wrongAuthStyle}> {errorMessage}</Text>
    </View>
  );
}

///change position to percent instead of px !!

const styles = StyleSheet.create({
  logoStyle: {
    width: 157.4,
    height: 157.4,
    position: "absolute",
    left: 109,
    top: 105,
    zIndex: 5,
  },
  squareStyle: {
    width: 375,
    height: 314,
    backgroundColor: "#FF5733",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  cookburnStyle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    position: "absolute",
    left: 84,
    top: 260,
  },
  notregistStyle: {
    color: "#FF5733",
    fontSize: 10,
    position: "absolute",
    left: 235,
    top: 339,
  },
  emailboxStyle: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF5733",
    height: 40,
    width: 302,
    position: "absolute",
    left: 36.5,
    top: 378,
    color: "#FF5733",
    fontSize: 10,
    paddingLeft: 7,
  },
  verificationBoxStyle: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF5733",
    height: 40,
    width: 302,
    position: "absolute",
    left: 40,
    top: 507,
    color: "#FF5733",
    fontSize: 10,
    padding: 7,
  },
  passwordboxStyle: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF5733",
    height: 40,
    width: 302,
    position: "absolute",
    left: 40,
    top: 577,
    color: "#FF5733",
    fontSize: 10,
    padding: 7,
  },
  emailStyle: {
    fontWeight: "bold",
    marginLeft: 20,
    color: "#FF5733",
    position: "absolute",
    left: 20,
    top: 358,
  },
  verificationStyle: {
    fontWeight: "bold",
    marginLeft: 20,
    color: "#FF5733",
    position: "absolute",
    left: 20,
    top: 487,
  },
  passwordStyle: {
    fontWeight: "bold",
    marginLeft: 20,
    color: "#FF5733",
    position: "absolute",
    left: 20,
    top: 557,
  },
  confirmButtonStyle: {
    width: 295,
    height: 37,
    backgroundColor: "#FF5733",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: 630,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#FF5733",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  wrongAuthStyle: {
    color: "red",
    fontSize: 10,
    textAlign: "center",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: 680,
  },

  buttonStyle: {
    width: 295,
    height: 37,
    backgroundColor: "#FF5733",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: 431,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#FF5733",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  textStyle: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ForgetPassword;
