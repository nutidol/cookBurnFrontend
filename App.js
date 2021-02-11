import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, ScrollView, Text } from "react-native";
import { createDrawerNavigator} from '@react-navigation/drawer';
import Amplify, { Auth } from "aws-amplify";
import { NavigationContainer } from "@react-navigation/native";
import {MaterialCommunityIcons,AntDesign, Ionicons,} from "@expo/vector-icons"
import { createStackNavigator, } from "react-navigation-stack";
import {HomeScreenNavigator,AddScreenNavigator,SearchScreenNavigator,WorkoutScreenNavigator,SettingScreenNavigator,} from "./src/screens//CustomNavigation";
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

//Amplify.configure(config);

// const navigator = createStackNavigator(
//   {
//     SignIn: SignIn,
//     Search: SearchScreen,
//     Search1: Search1Screen,
//     Search2: Search2Screen,
//     SignUp: SignUp,
//     ConfirmSignUp: ConfirmSignUp,
//     ForgetPassword: ForgetPassword,
//     Know: KnowmoreScreen,
//     On1: OnboardingOneScreen,
//     On2: OnboardingTwoScreen,
//     On3: OnboardingThreeScreen,
//     Home1: Home1Screen,
//     Home2: Home2Screen,
//     Home3: Home3Screen,
//     Home4: Home4Screen,
//     Home5: Home5Screen,
//     Add: AddScreen,
//     TotalAdd: TotalAddScreen,
//     Workout: WorkoutScreen,
//     Workout1: Workout1Screen,
//     Workout2: Workout2Screen,
//     Workout3: Workout3Screen,
//     AddProfile: AddProfileScreen,
//     AddProfile1: AddProfile1Screen,
//     AddProfile2: AddProfile2Screen,
//     AddProfile3: AddProfile3Screen,
//     AddProfile4: AddProfile4Screen,
//     EditProfile1: EditProfile1Screen,
//     EditProfile2: EditProfile2Screen,
//     EditProfile21: EditProfile21Screen,
//     EditProfile3: EditProfile3Screen,
//     EditProfile22: EditProfile22Screen,
//     Setting: SettingScreen,
//   },
//   {
//     initialRouteName: "Home1",
//   }
// );

import HouseScreen from "./src/screens/HouseScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

//const Tab = createMaterialBottomTabNavigator();

//const HouseStack = createStackNavigator();
//const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HouseStackScreen =({navigation}) => (
  <HouseStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: 'black'
    },
    headerTintColor: "#FF5733",
    headerTitleStyle:{
      fontWeight: 'bold'
    }  
  }}>
    <HouseStack.Screen name="House" component={HouseScreen}
    options ={{
      headerLeft:() => (
        <Icon.Button name= 'ios-memu' size ={25} backgroundColor ='black'
        onPress={() => navigation.openDrawer()}> </Icon.Button>
      )
    }} />
 
  </HouseStack.Navigator>
)

const DetailsStackScreen =({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
    headerTintColor: "#FF5733",
    headerTitleStyle:{
      fontWeight: 'bold'
    }  
  }}>
    <DetailStack.Screen name="Details" component={DetailsScreen}
    options ={{
      headerLeft:() => (
        <Icon.Button name= 'ios-memu' size ={25} backgroundColor ='black'
        onPress={() => navigation.openDrawer()}> </Icon.Button>
      )
    }} />
 
  </DetailsStack.Navigator>
)


function App() {
  return (
    
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="House"
        
         screenOptions={{
          headerStyle:{
            backgroundColor: "#FF5733"
          },
          headerTintColor: "#FF5733",
          headerTitleStyle:{
            fontWeight: 'bold'
          }  
        }}>
        <Drawer.Screen name="House" component={HouseScreen} 
       options={{
         headerLeft:() => (
          <Icon.Button name= 'ios-memu' size ={25} 
          onPress={() => navigation.openDrawer()}> </Icon.Button>
        )
       }}/>
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
      {/*<Tab.Navigator
          initialRouteName="Home"
          activeColor="#FF5733"
          labelStyle={{ fontSize: 12 }}
          barStyle={{
            backgroundColor: "white",
            width: 375,
            height: 48,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreenNavigator}
            options={{
              tabBarLabel: "Home",
              

              tabBarIcon: () => (
                <MaterialCommunityIcons name="home" color="#FF5733" size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Add"
            component={AddScreenNavigator}
            options={{
              tabBarLabel: "Add",
              tabBarIcon: () => (
                <Ionicons
                  name="md-add-circle-sharp"
                  color="#FF5733"
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreenNavigator}
            options={{
              tabBarLabel: "Search",
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="magnify"
                  color="#FF5733"
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Workout"
            component={WorkoutScreenNavigator}
            options={{
              tabBarLabel: "Workout",
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="human-handsup"
                  color="#FF5733"
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingScreenNavigator}
            options={{
              tabBarLabel: "Setting",
              tabBarIcon: () => (
                <AntDesign name="setting" color="#FF5733" size={26} />
              ),
            }}
          />
          </Tab.Navigator> */}

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

