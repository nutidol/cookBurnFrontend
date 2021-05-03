import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import HomePage from "./HomePage";
import SearchScreen from "./SearchScreen";
import GeneratedMenus from "./GeneratedMenus";
import MenuInformation from "./MenuInformation";
import AddIngredients from "./AddIngredients";
import TotalWorkout from "./TotalWorkout";
import TotalIngredients from "./TotalIngredients";
import WorkoutInformation from "./WorkoutInformation";
import OtherProfile from "./OtherProfile";
import AddOtherProfileInfo from "./AddOtherProfileInfo";
import AddOtherProfileTaste from "./AddOtherProfileTaste";
import OtherProfileInformation from "./OtherProfileInformation";
import AddOtherProfileCuisine from "./AddOtherProfileCuisine";
import UserProfile from "./UserProfile";
import EditUserProfileInfo from "./EditUserProfileInfo";
import EditUserProfileTaste from "./EditUserProfileTaste";
import EditUserProfileCuisine from "./EditUserProfileCuisine";
import SettingScreen from "./SettingScreen";
import EditOthersProfileInfo from "./EditOthersProfileInfo";
import EditOthersProfileCuisines from "./EditOthersProfileCuisines";
import EditOthersProfileTaste from "./EditOthersProfileTaste";



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
        tabBarLabel: 'HomePage',
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
        tabBarLabel: 'AddIngredients',
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
        tabBarLabel: 'Total Workout',
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
      <HomeStack.Screen name="HomePage" component={HomePage} options={{

        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      
      <HomeStack.Screen name="MenuInformation" component={MenuInformation} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <HomeStack.Screen name="Workout Information" component={WorkoutInformation} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />

      {/* <HomeStack.Screen name="Search1" component={Search1Screen} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} /> */}
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
    <AddStack.Screen name="Add Ingredients" component={AddIngredients} options={{
      headerLeft: () => (
        <Icon.Button name="menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
    <AddStack.Screen name="Total Ingredients" component={TotalIngredients} options={{
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
      <SearchStack.Screen name="Generated Menus" component={GeneratedMenus} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />

      <SearchStack.Screen name="Menu Information" component={MenuInformation} options={{
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
      <WorkoutStack.Screen name="Total Workout" component={TotalWorkout} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <WorkoutStack.Screen name="Workout Information" component={WorkoutInformation} options={{
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
      <SettingStack.Screen name="Other’s Profile" component={OtherProfile} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="Add Other’s Profile Info" component={AddOtherProfileInfo} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="Add Other’s Profile Taste" component={AddOtherProfileTaste} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="Add Other’s Profile Cuisine" component={AddOtherProfileCuisine} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="Other’s Profile Information" component={OtherProfileInformation} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="User profile" component={UserProfile} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="Edit User Profile Info" component={EditUserProfileInfo} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="Edit User Profile Taste" component={EditUserProfileTaste} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <SettingStack.Screen name="Edit User Profile Cuisine" component={EditUserProfileCuisine} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />

      <SettingStack.Screen name="Edit Other's Profile Info" component={EditOthersProfileInfo} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />

      <SettingStack.Screen name="Edit Other's Profile Cuisines" component={EditOthersProfileCuisines} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />

      <SettingStack.Screen name="Edit Other's Profile Taste" component={EditOthersProfileTaste} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#FF5733' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
    </SettingStack.Navigator>
  )
}

export { SettingStackScreen };


