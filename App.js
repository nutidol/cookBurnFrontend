import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { Button, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import SearchScreen from './src/screens/SearchScreen';
import SignupScreen from './src/screens/SignupScreen';
import KnowmoreScreen from './src/screens/KnowmoreScreen';
import TabScreen from './src/screens/TabScreen';
import OnboardingOneScreen from './src/screens/OnboardingOneScreen';
import OnboardingTwoScreen from './src/screens/OnboardingTwoScreen';
import OnboardingThreeScreen from './src/screens/OnboardingThreeScreen';
import BlankScreen from './src/screens/BlankScreen';
import Home1Screen from './src/screens/Home1Screen';
import Home2Screen from './src/screens/Home2Screen';
import Home3Screen from './src/screens/Home3Screen';
import Home4Screen from './src/screens/Home4Screen';
import Home5Screen from './src/screens/Home5Screen';
import Home6Screen from './src/screens/Home6Screen';
import Search1Screen from './src/screens/Search1Screen';
import Search2Screen from './src/screens/Search2Screen';
import Search3Screen from './src/screens/Search3Screen';
import Search4Screen from './src/screens/Search4Screen';
import AddScreen from './src/screens/AddScreen';
import Add2Screen from './src/screens/Add2Screen';
import Add11Screen from './src/screens/Add11Screen';
import Add12Screen from './src/screens/Add12Screen';
import Add13Screen from './src/screens/Add13Screen';
import Add21Screen from './src/screens/Add13Screen';
import Add22Screen from './src/screens/Add22Screen';
import TotalAdd1Screen from './src/screens/TotalAdd1Screen';
import TotalAdd2Screen from './src/screens/TotalAdd2Screen';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);


const navigator = createStackNavigator({
    Blank: BlankScreen,
    Login: LoginScreen,
    Search: SearchScreen,
    Search1: Search1Screen,
    Search2: Search2Screen,
    Search3: Search3Screen,
    Search4: Search4Screen,
    Signup: SignupScreen,
    Know: KnowmoreScreen,
    On1: OnboardingOneScreen,
    On2: OnboardingTwoScreen,
    On3: OnboardingThreeScreen,
    Tab: TabScreen,
    Home1: Home1Screen,
    Home2: Home2Screen,
    Home3: Home3Screen,
    Home4: Home4Screen,
    Home5: Home5Screen,
    Home6: Home6Screen,
    Add: AddScreen,
    Add2: Add2Screen,
    Add11: Add11Screen,
    Add12: Add12Screen,
    Add13: Add13Screen,
    Add21: Add21Screen,
    Add22: Add22Screen,
    TotalAdd1:  TotalAdd1Screen,
    TotalAdd2:  TotalAdd2Screen,
  }, {

    initialRouteName: 'Login',
  
  });

  
  export default createAppContainer(navigator);
 
