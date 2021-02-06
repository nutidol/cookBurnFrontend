// to keep sign out button + redirect from sign in page

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Auth } from "aws-amplify";

export default function Home({updateAuthState }) {
  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState("loggedOut");
      console.log("Sign out success")
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle} onPress={signOut}>
        <Text style={styles.textStyle}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  buttonStyle: {
    width: 295,
    height: 37,
    backgroundColor: "#FF5733",
    position: "absolute",
    left: 40,
    top: "50%",
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
