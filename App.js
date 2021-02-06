import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import Amplify, { Auth } from "aws-amplify";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import config from "./aws-exports";
import SignIn from "./src/screens/SignInScreen";
import SignUp from "./src/screens/SignUpScreen";
import ConfirmSignUp from "./src/screens/ConfirmSignUp";
import Home from "./src/screens/Home";
import ForgetPassword from "./src/screens/ForgetPassword";
import KnowmoreScreen from "./src/screens/KnowmoreScreen";
import TabScreen from "./src/screens/TabScreen";
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
import Search3Screen from "./src/screens/Search3Screen";
import Search4Screen from "./src/screens/Search4Screen";
import AddScreen from "./src/screens/AddScreen";
import Add2Screen from "./src/screens/Add2Screen";
import Add11Screen from "./src/screens/Add11Screen";
import Add12Screen from "./src/screens/Add12Screen";
import Add13Screen from "./src/screens/Add13Screen";
import Add21Screen from "./src/screens/Add13Screen";
import Add22Screen from "./src/screens/Add22Screen";
import TotalAdd1Screen from "./src/screens/TotalAdd1Screen";
import TotalAdd2Screen from "./src/screens/TotalAdd2Screen";
import WorkoutScreen from "./src/screens/WorkoutScreen";
import Workout1Screen from "./src/screens/Workout1Screen";
import Workout2Screen from "./src/screens/Workout2Screen";
import Workout3Screen from "./src/screens/Workout3Screen";

Amplify.configure(config);


// const navigator = createStackNavigator(
//   {
//     SignIn: SignIn,
//     Search: SearchScreen,
//     Search1: Search1Screen,
//     Search2: Search2Screen,
//     Search3: Search3Screen,
//     Search4: Search4Screen,
//     SignUp: SignUp,
//     ConfirmSignUp: ConfirmSignUp,
//     ForgetPassword: ForgetPassword,
//     Know: KnowmoreScreen,
//     On1: OnboardingOneScreen,
//     On2: OnboardingTwoScreen,
//     On3: OnboardingThreeScreen,
//     Tab: TabScreen,
//     Home: Home,
//     Home1: Home1Screen,
//     Home2: Home2Screen,
//     Home3: Home3Screen,
//     Home4: Home4Screen,
//     Home5: Home5Screen,
//     Add: AddScreen,
//     Add2: Add2Screen,
//     Add11: Add11Screen,
//     Add12: Add12Screen,
//     Add13: Add13Screen,
//     Add21: Add21Screen,
//     Add22: Add22Screen,
//     TotalAdd1:  TotalAdd1Screen,
//     TotalAdd2:  TotalAdd2Screen,
//     Workout: WorkoutScreen,
//     Workout1: Workout1Screen,
//     Workout2: Workout2Screen,
//     Workout3: Workout3Screen,
//   }, {

//     initialRouteName: 'Home5',

//   });

// export default createAppContainer(navigator);


//devide navigation flow to two stack for lockin
//for our app may need other stacks too...
const AuthenticationStack = createStackNavigator();
const AppStack = createStackNavigator();



//stack that has all screens related when the user is not logged in
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
    </AuthenticationStack.Navigator>
  );
};

// stack that has only one screen: the Home screen. This screen is only available if a user successfully logs in.
const AppNavigator = (props) => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home">
        {(screenProps) => (
          <Home {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AppStack.Screen>
    </AppStack.Navigator>
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

