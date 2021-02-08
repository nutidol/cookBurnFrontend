import React, { useState, useEffect } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import KnowmoreScreen from './src/screens/KnowmoreScreen';
import TabScreen from './src/screens/TabScreen';
import OnboardingOneScreen from './src/screens/OnboardingOneScreen';
import OnboardingTwoScreen from './src/screens/OnboardingTwoScreen';
import OnboardingThreeScreen from './src/screens/OnboardingThreeScreen';
import Home1Screen from './src/screens/Home1Screen';
import Home2Screen from './src/screens/Home2Screen';
import Home3Screen from './src/screens/Home3Screen';
import Home4Screen from './src/screens/Home4Screen';
import Home5Screen from './src/screens/Home5Screen';
import SearchScreen from './src/screens/SearchScreen';
import Search1Screen from './src/screens/Search1Screen';
import Search2Screen from './src/screens/Search2Screen';
import AddScreen from './src/screens/AddScreen';
import TotalAddScreen from './src/screens/TotalAddScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import Workout1Screen from './src/screens/Workout1Screen';
import Workout2Screen from './src/screens/Workout2Screen';
import Workout3Screen from './src/screens/Workout3Screen';
import AddProfileScreen from './src/screens/AddProfileScreen';
import AddProfile1Screen from './src/screens/AddProfile1Screen';
import AddProfile2Screen from './src/screens/AddProfile2Screen';
import AddProfile3Screen from './src/screens/AddProfile3Screen';
import AddProfile4Screen from './src/screens/AddProfile4Screen';
import AddProfile5Screen from './src/screens/AddProfile5Screen';
import EditProfile1Screen from './src/screens/EditProfile1Screen';
import EditProfile2Screen from './src/screens/EditProfile2Screen';
import EditProfile3Screen from './src/screens/EditProfile3Screen';
import EditProfile21Screen from './src/screens/EditProfile21Screen';
import EditProfile22Screen from './src/screens/EditProfile22Screen';
import SettingScreen from './src/screens/SettingScreen';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);


const navigator = createStackNavigator({
   Login: LoginScreen,
    Search: SearchScreen,
    Search1: Search1Screen,
    Search2: Search2Screen,
    Signup: SignupScreen,
    Know: KnowmoreScreen,
    On1: OnboardingOneScreen,
    On2: OnboardingTwoScreen,
    On3: OnboardingThreeScreen,
import ConfirmSignUp from "./src/screens/ConfirmSignUp";
    ConfirmSignUp: ConfirmSignUp,
    Tab: TabScreen,
    Home1: Home1Screen,
    Home2: Home2Screen,
    Home3: Home3Screen,
    Home4: Home4Screen,
    Home5: Home5Screen,
    Add: AddScreen,
    TotalAdd:  TotalAddScreen,
    Workout: WorkoutScreen,
    Workout1: Workout1Screen,
    Workout2: Workout2Screen,
    Workout3: Workout3Screen,
    AddProfile: AddProfileScreen,
    AddProfile1: AddProfile1Screen,
    AddProfile2: AddProfile2Screen,
    AddProfile3: AddProfile3Screen,
    AddProfile4: AddProfile4Screen,
    AddProfile5: AddProfile5Screen,
    EditProfile1: EditProfile1Screen,
    EditProfile2: EditProfile2Screen,
    EditProfile3: EditProfile3Screen,
    EditProfile21: EditProfile21Screen,
    EditProfile22: EditProfile22Screen,
    Setting: SettingScreen

  }, {

    initialRouteName: 'Setting',
  
  });

export default createAppContainer(navigator);
