import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Auth } from "aws-amplify";


export default function ConfirmSignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [invalidMessage, setInvalidMessage] = useState(null);

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, authCode);
      console.log(" Code confirmed");
      //when navigate back to sign in how to reset the text input to be blank? 
      //right now testing it and it keeps state...
      navigation.navigate("SignIn");
    } catch (error) {
      console.log(
        " Verification code does not match. Please enter a valid verification code.",
        error.code
      );
      setInvalidMessage(error.message);
    }
  }
  return (
    <View>
      <View style={styles.squareStyle}></View>
      <Image
        style={styles.logoStyle}
        source={require("../../assets/cookburn.png")}
      />

      <Text style={styles.cookburnStyle}>CookBurn</Text>

      <Text style={styles.usernameStyle}> Username</Text>

      <TextInput
        style={styles.usernameboxStyle}
        value={username}
        onChangeText={(text) => setUsername(text)}
        color="#FF5733"
        autoCapitalize="none"
        placeholder="Enter username"
        placeholderTextColor="#FF5733"
      />
      <Text style={styles.verificationStyle}> verification code </Text>
      <TextInput
        style={styles.verificationboxStyle}
        value={authCode}
        onChangeText={(text) => setAuthCode(text)}
        color="#FF5733"
        autoCapitalize="none"
        placeholder="Enter verification code"
        keyboardType="numeric"
        placeholderTextColor="#FF5733"
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={confirmSignUp}>
        <Text style={styles.textStyle}>Confirm</Text>
      </TouchableOpacity>
      <Text>{invalidMessage}</Text>
    </View>
  );
}
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
  usernameboxStyle: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF5733",
    height: 40,
    width: 302,
    position: "absolute",
    left: 36.5,
    top: 374,
    color: "#FF5733",
    fontSize: 10,
  },
  verificationboxStyle: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF5733",
    height: 40,
    width: 302,
    position: "absolute",
    left: 36.5,
    top: 449,
    color: "#FF5733",
    fontSize: 10,
  },
  usernameStyle: {
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
    top: 433,
  },
  buttonStyle: {
    width: 295,
    height: 37,
    backgroundColor: "#FF5733",
    position: "absolute",
    left: 40,
    top: 581,
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
