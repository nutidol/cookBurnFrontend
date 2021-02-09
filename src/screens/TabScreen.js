import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import Home1Screen from './Home1Screen';
import AddScreen from './AddScreen';
import SearchScreen from './SearchScreen';
import WorkoutScreen from './WorkoutScreen';
import SettingScreen from './SettingScreen';




const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FF5733"
      labelStyle={{ fontSize: 12 }}
      barStyle={{
        backgroundColor: 'white',
        width: 375, height: 48,
      }}

    >
      <Tab.Screen
        name="Home"
        component={Home1Screen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#FF5733" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: () => (
            <Ionicons name="md-add-circle-sharp" color="#FF5733" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="magnify" color="#FF5733" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{
          tabBarLabel: 'Workout',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="human-handsup" color="#FF5733" size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: () => (
            <AntDesign name="setting" color="#FF5733" size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default function TabScreen() {
  return (

    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}