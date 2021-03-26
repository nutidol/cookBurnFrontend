import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, ScrollView, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Amplify, { Auth, API } from "aws-amplify";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, } from "@react-navigation/stack";
import CustomNavigation from "./src/screens/CustomNavigation";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import config from "./aws-exports";
import SignIn from "./src/screens/SignInScreen";
import SignUp from "./src/screens/SignUpScreen";

import ConfirmSignUp from "./src/screens/ConfirmSignUp";
import ForgetPassword from "./src/screens/ForgetPassword";
import KnowmoreScreen from "./src/screens/KnowmoreScreen";
import OnboardingOneScreen from "./src/screens/OnboardingOneScreen";
import OnboardingTwoScreen from "./src/screens/OnboardingTwoScreen";
import OnboardingThreeScreen from "./src/screens/OnboardingThreeScreen";
import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native';
import { DrawerContent } from './src/screens/DrawerContent';
import axios from 'axios';
import Home1Screen from "./src/screens/Home1Screen";

Amplify.configure(config);

//const AuthenticationStack = createStackNavigator();

const Drawer = createDrawerNavigator();

//function App() {
//return (

//     <NavigationContainer>
//       <AuthenticationStack.Navigator headerMode="none">

//         <AuthenticationStack.Screen
//           name="OnBoarding1"
//           component={OnboardingOneScreen}
//         />


//         {/* <Drawer.Navigator drawerContent ={props => <DrawerContent {...props}/>} >
//         <Drawer.Screen name="Home" component={CustomNavigation} />
//       </Drawer.Navigator> */}
//       </AuthenticationStack.Navigator>

//     </NavigationContainer>

//   );

// };

// export default App




const AuthenticationStack = createStackNavigator();

// //stack that has all screens related when the user is not logged in
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


    </AuthenticationStack.Navigator>
  );
};

// stack that has only one screen: the Home screen. This screen is only available if a user successfully logs in.
const AppNavigator = (props) => {
  return (
    <Drawer.Navigator drawerContent={screenProps => <DrawerContent {...screenProps} updateAuthState={props.updateAuthState} />} >
      <Drawer.Screen name="Home" component={CustomNavigation}>
      </Drawer.Screen>
    </Drawer.Navigator>
  );

};

//responsible to display a loading indicator when checking the state whether the user is logged in or not
const Initializing = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
};

function App() {
  //... other stack logic?

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


