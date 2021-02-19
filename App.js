import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, ScrollView, Text } from "react-native";
import { createDrawerNavigator} from '@react-navigation/drawer';
import Amplify, { Auth,API}from "aws-amplify";
import { NavigationContainer } from "@react-navigation/native";
import {MaterialCommunityIcons,AntDesign, Ionicons,} from "@expo/vector-icons"
import { createStackNavigator, } from "react-navigation-stack";
import CustomNavigation from "./src/screens/CustomNavigation";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import config from "./aws-exports";
import SignIn from "./src/screens/SignInScreen";
//import SignUp from "./src/screens/SignUpScreen";
import ConfirmSignUp from "./src/screens/ConfirmSignUp";
import Home from "./src/screens/Home";
import ForgetPassword from "./src/screens/ForgetPassword";
import KnowmoreScreen from "./src/screens/KnowmoreScreen";
import OnboardingOneScreen from "./src/screens/OnboardingOneScreen";
import OnboardingTwoScreen from "./src/screens/OnboardingTwoScreen";
import OnboardingThreeScreen from "./src/screens/OnboardingThreeScreen";
import Home1Screen from "./src/screens/Home1Screen";
import Home2Screen from "./src/screens/Home2Screen";
import Home3Screen from "./src/screens/Home3Screen";
import Home4Screen from "./src/screens/Home4Screen";
import Home5Screen from "./src/screens/Home5Screen";
import SearchScreen from "./src/screens/SearchScreen";
import Search1Screen from "./src/screens/Search1Screen";
import Search2Screen from "./src/screens/Search2Screen";
import AddScreen from "./src/screens/AddScreen";
import WorkoutScreen from "./src/screens/WorkoutScreen";
import TotalAddScreen from "./src/screens/TotalAddScreen";
import Workout1Screen from "./src/screens/Workout1Screen";
import Workout2Screen from "./src/screens/Workout2Screen";
import Workout3Screen from "./src/screens/Workout3Screen";
import AddProfileScreen from "./src/screens/AddProfileScreen";
import AddProfile1Screen from "./src/screens/AddProfile1Screen";
import AddProfile2Screen from "./src/screens/AddProfile2Screen";
import AddProfile4Screen from "./src/screens/AddProfile4Screen";
import AddProfile3Screen from "./src/screens/AddProfile3Screen";
import EditProfile1Screen from "./src/screens/EditProfile1Screen";
import EditProfile2Screen from "./src/screens/EditProfile2Screen";
import EditProfile3Screen from "./src/screens/EditProfile3Screen";
import EditProfile21Screen from "./src/screens/EditProfile21Screen";
import EditProfile22Screen from "./src/screens/EditProfile22Screen";
import SettingScreen from "./src/screens/SettingScreen";
import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native';
import {DrawerContent} from './src/screens/DrawerContent';
//Amplify.configure(config);


const Drawer = createDrawerNavigator();

function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent ={props => <DrawerContent {...props}/>} >
        <Drawer.Screen name="Home" component={CustomNavigation} />
      </Drawer.Navigator>
      </NavigationContainer>
    
  );

};

export default App

// //export default createAppContainer(navigator);

// //devide navigation flow to two stack for lockin
// //for our app may need other stacks too...

// const AuthenticationStack = createStackNavigator();
// const AppStack = createStackNavigator();

// // //stack that has all screens related when the user is not logged in
// const AuthenticationNavigator = (props) => {
//   return (
//     <AuthenticationStack.Navigator headerMode="none">
//       <AuthenticationStack.Screen name="SignIn">
//         {(screenProps) => (
//           <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
//         )}
//       </AuthenticationStack.Screen>
//       <AuthenticationStack.Screen name="SignUp" component={SignUp} />
//       <AuthenticationStack.Screen
//         name="ConfirmSignUp"
//         component={ConfirmSignUp}
//       />
//       <AuthenticationStack.Screen
//         name="ForgetPassword"
//         component={ForgetPassword}
//       />
//     </AuthenticationStack.Navigator>
//   );
// };

// // stack that has only one screen: the Home screen. This screen is only available if a user successfully logs in.
// const AppNavigator = (props) => {
//   return (
//     <AppStack.Navigator>
//       <AppStack.Screen name="Home">
//         {(screenProps) => (
//           <Home {...screenProps} updateAuthState={props.updateAuthState} />
//         )}
//       </AppStack.Screen>
//     </AppStack.Navigator>
//   );
// };

// //responsible to display a loading indicator when checking the state whether the user is logged in or not
// const Initializing = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <ActivityIndicator size="large" color="tomato" />
//     </View>
//   );
// };

// function App() {
//   //... other stack logic?

//   const [isUserLoggedIn, setUserLoggedIn] = useState("initializing");

//   useEffect(() => {
//     checkAuthState();
//   }, []);

//   async function checkAuthState() {
//     try {
//       await Auth.currentAuthenticatedUser();
//       console.log(" User is signed in");
//       setUserLoggedIn("loggedIn");
//     } catch (err) {
//       console.log(" User is not signed in");
//       setUserLoggedIn("loggedOut");
//     }
//   }

//   function updateAuthState(isUserLoggedIn) {
//     setUserLoggedIn(isUserLoggedIn);
//   }
//   return (
//     <NavigationContainer>
//       {isUserLoggedIn === "initializing" && <Initializing />}
//       {isUserLoggedIn === "loggedIn" && (
//         <AppNavigator updateAuthState={updateAuthState} />
//       )}
//       {isUserLoggedIn === "loggedOut" && (
//         <AuthenticationNavigator updateAuthState={updateAuthState} />
//       )}
//     </NavigationContainer>
//   );
// }
// export default App;

