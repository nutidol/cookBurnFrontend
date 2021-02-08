import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Auth } from "aws-amplify";

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [invalidMessage, setInvalidMessage] = useState(null);

  async function signUp() {
    try {
      await Auth.signUp({ username, password, attributes: { email } });
      console.log(" Sign-up Confirmed");
      navigation.navigate("ConfirmSignUp");
    } catch (error) {
      console.log(" Error signing up...", error);
      if (error.message == "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6"){
        setInvalidMessage("Password must be equal and have greater lenght than 6.");
      }else if(error.message == "Password did not conform with policy: Password must have uppercase characters" ){
        setInvalidMessage("Password must have uppercase characters.");
      }else{
        setInvalidMessage(error.message);
      }
      //need to do other case to show error like invalid email, existed email, invalid password (must have upper case, must have symbol), ..., must think of others too
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

      <Text style={styles.emailStyle}> E-mail</Text>
      <TextInput
        style={styles.emailboxStyle}
        value={email}
        onChangeText={(text) => setEmail(text)}
        color="#FF5733"
        autoCapitalize="none"
        placeholder="Enter email"
        placeholderTextColor="#FF5733"
        keyboardType="email-address"
        textContentType="emailAddress"
      />

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
      <Text style={styles.passwordStyle}> Password </Text>
      <TextInput
        style={styles.passwordboxStyle}
        value={password}
        onChangeText={(text) => setPassword(text)}
        color="#FF5733"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholder="Enter password"
        placeholderTextColor="#FF5733"
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={signUp}>
        <Text style={styles.textStyle}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.footerButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.forgotPasswordButtonText}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.wrongAuthStyle}> {invalidMessage}</Text>
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

  emailboxStyle: {
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
    paddingLeft: 7,

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
    top: 449,
    color: "#FF5733",
    fontSize: 10,
    paddingLeft: 7,

  },
  passwordboxStyle: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF5733",
    height: 40,
    width: 302,
    position: "absolute",
    left: 36.5,
    top: 524,
    color: "#FF5733",
    fontSize: 10,
    paddingLeft: 7,
  },

  emailStyle: {
    fontWeight: "bold",
    marginLeft: 20,
    color: "#FF5733",
    position: "absolute",
    left: 20,
    top: 358,
  },

  usernameStyle: {
    fontWeight: "bold",
    marginLeft: 20,
    color: "#FF5733",
    position: "absolute",
    left: 20,
    top: 433,
  },
  passwordStyle: {
    fontWeight: "bold",
    marginLeft: 20,
    color: "#FF5733",
    position: "absolute",
    left: 20,
    top: 508,
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
  wrongAuthStyle: {
    color: "red",
    fontSize: 10,
    textAlign: "center",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: 630,
  },

  textStyle: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  forgotPasswordButtonText: {
    color: "#FF5733",
    fontSize: 10,
    fontWeight: "600",
  },

  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
