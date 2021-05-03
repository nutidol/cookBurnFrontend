import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, ScrollView, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Amplify, { Auth } from "aws-amplify";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CustomNavigation from "./src/screens/CustomNavigation";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import config from "./aws-exports";
import SignIn from "./src/screens/SignInScreen";
import SignUp from "./src/screens/SignUp";

import ConfirmSignUp from "./src/screens/ConfirmSignUp";
import ForgetPassword from "./src/screens/ForgetPassword";
import KnowmoreScreen from "./src/screens/KnowmoreScreen";
import OnboardingOneScreen from "./src/screens/OnboardingOneScreen";
import OnboardingTwoScreen from "./src/screens/OnboardingTwoScreen";
import OnboardingThreeScreen from "./src/screens/OnboardingThreeScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from "react-native";
import { DrawerContent } from "./src/screens/DrawerContent";
import axios from "axios";


Amplify.configure(config);

const AuthenticationStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const AuthenticationNavigator = (props) => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="SignIn">
        {(screenProps) => (
          <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
     
      <AuthenticationStack.Screen
        name="ConfirmSignUp"
        component={ConfirmSignUp}
      />
      <AuthenticationStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
      /> 

      <AuthenticationStack.Screen
        name="OnBoarding1"
        component={OnboardingOneScreen}
      />

      <AuthenticationStack.Screen
        name="OnBoarding2"
        component={OnboardingTwoScreen}
      />

      <AuthenticationStack.Screen
        name="OnBoarding3"
        component={OnboardingThreeScreen}

      />

      <AuthenticationStack.Screen
        name="Knowmore"
        component={KnowmoreScreen}
      />

      <AuthenticationStack.Screen
        name="HomePage"
        component={CustomNavigation}
      />

    </AuthenticationStack.Navigator>

    
  );
};


const AppNavigator = (props) => {
  return (
    <Drawer.Navigator drawerContent={screenProps => <DrawerContent {...screenProps} updateAuthState={props.updateAuthState} />} >
      <Drawer.Screen name="Home" component={CustomNavigation}>
      </Drawer.Screen>
    </Drawer.Navigator>
  );

};


const Initializing = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
};

function App() {


  const [isUserLoggedIn, setUserLoggedIn] = useState("initializing");

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      console.log(" User is signed in");

      setUserLoggedIn("loggedIn");
    } catch (err) {
      console.log(" User is not signed in");
      setUserLoggedIn("loggedOut");
    }
  }

  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }

  return (
    <NavigationContainer>
      {isUserLoggedIn === "initializing" && <Initializing />}
      {isUserLoggedIn === "loggedIn" && (
        <AppNavigator updateAuthState={updateAuthState} />
      )}
      {isUserLoggedIn === "loggedOut" && (
        <AuthenticationNavigator updateAuthState={updateAuthState} />
      )}
    </NavigationContainer>
  );
}
export default App;
