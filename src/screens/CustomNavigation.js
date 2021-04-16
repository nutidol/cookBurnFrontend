import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Home1Screen from "./Home1Screen";
import Home2Screen from "./Home2Screen";
import Home3Screen from "./Home3Screen";
import Home4Screen from "./Home4Screen";
//import Home from "./Home";
import Home5Screen from "./Home5Screen";
import SearchScreen from "./SearchScreen";
import Search1Screen from "./Search1Screen";
import Search2Screen from "./Search2Screen";
import AddScreen from "./AddScreen";
import WorkoutScreen from "./WorkoutScreen";
import TotalAddScreen from "./TotalAddScreen";
import Workout1Screen from "./Workout1Screen";
import Workout2Screen from "./Workout2Screen";
//import Workout3Screen from "./Workout3Screen";
import AddProfileScreen from "./AddProfileScreen";
import AddProfile1Screen from "./AddProfile1Screen";
import AddProfile2Screen from "./AddProfile2Screen";
import AddProfile4Screen from "./AddProfile4Screen";
import AddProfile3Screen from "./AddProfile3Screen";
import EditProfile1Screen from "./EditProfile1Screen";
import EditProfile2Screen from "./EditProfile2Screen";
import EditProfile21Screen from "./EditProfile21Screen";
import EditProfile22Screen from "./EditProfile22Screen";
import SettingScreen from "./SettingScreen";


const HomeStack = createStackNavigator();
const AddStack = createStackNavigator();
const SearchStack = createStackNavigator();
const WorkoutStack = createStackNavigator();
const SettingStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const CustomNavigation = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="white"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: 'white',
        tabBarIcon: () => (
          <Icon name="ios-home" color='#FF5733' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Add"
      component={AddStackScreen}
      options={{
        tabBarLabel: 'Add',
        tabBarColor: 'white',
        tabBarIcon: () => (
          <Icon name="add-circle" color='#FF5733' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: 'white',
        tabBarIcon: () => (
          <Icon name="ios-search" color='#FF5733' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Workout"
      component={WorkoutStackScreen}
      options={{
        tabBarLabel: 'Workout',
        tabBarColor: 'white',
        tabBarIcon: () => (
          <Icon1 name="dumbbell" color='#FF5733' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingStackScreen}
      options={{
        tabBarLabel: 'Setting',
        tabBarColor: 'white',
        tabBarIcon: () => (
          <Icon name="ios-settings" color='#FF5733' size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default CustomNavigation;

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#FF5733',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home1" component={Home1Screen} options={{

        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <HomeStack.Screen name="Home2" component={Home2Screen} options={{

        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <HomeStack.Screen name="Home3" component={Home3Screen} options={{

        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <HomeStack.Screen name="Home4" component={Home4Screen} options={{

        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <HomeStack.Screen name="Home5" component={Home5Screen} options={{

        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
    </HomeStack.Navigator>
  )

}
export { HomeStackScreen };


const AddStackScreen = ({ navigation }) => {
  return (<AddStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: '#FF5733',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <AddStack.Screen name="Add" component={AddScreen} options={{
      headerLeft: () => (
        <Icon.Button name="menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
    <AddStack.Screen name="TotalAdd" component={TotalAddScreen} options={{
      headerLeft: () => (
        <Icon.Button name="menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </AddStack.Navigator>)
}

export { AddStackScreen };

const SearchStackScreen = ({ navigation }) => {
  return (
    <SearchStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#FF5733',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <SearchStack.Screen name="Search" component={SearchScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SearchStack.Screen name="Search1" component={Search1Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />

<SearchStack.Screen name="Search2" component={Search2Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />



    </SearchStack.Navigator>
  )
}

export { SearchStackScreen };

const WorkoutStackScreen = ({ navigation }) => {
  return (
    <WorkoutStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#FF5733',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <WorkoutStack.Screen name="Workout" component={WorkoutScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <WorkoutStack.Screen name="Workout1" component={Workout1Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <WorkoutStack.Screen name="Workout2" component={Workout2Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
    </WorkoutStack.Navigator>
  )
}

export { WorkoutStackScreen };


const SettingStackScreen = ({ navigation }) => {
  return (
    <SettingStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#FF5733',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <SettingStack.Screen name="Setting" component={SettingScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="AddProfile" component={AddProfileScreen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="AddProfile1" component={AddProfile1Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="AddProfile2" component={AddProfile2Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="AddProfile3" component={AddProfile3Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="AddProfile4" component={AddProfile4Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="EditProfile1" component={EditProfile1Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="EditProfile2" component={EditProfile2Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="EditProfile21" component={EditProfile21Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="EditProfile22" component={EditProfile22Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
    </SettingStack.Navigator>
  )
}

export { SettingStackScreen };


