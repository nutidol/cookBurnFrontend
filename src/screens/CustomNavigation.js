import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home1Screen from "./Home1Screen";
import Home2Screen from "./Home2Screen";
import Home3Screen from "./Home3Screen";
import Home4Screen from "./Home4Screen";
import Home5Screen from "./Home5Screen";
import SearchScreen from "./SearchScreen";
import Search1Screen from "./Search1Screen";
import AddScreen from "./AddScreen";
import WorkoutScreen from "./WorkoutScreen";
import TotalAddScreen from "./TotalAddScreen";
import Workout1Screen from "./Workout1Screen";
import Workout2Screen from "./Workout2Screen";
import Workout3Screen from "./Workout3Screen";
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
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={Home1Screen}
        //   options={{
        //     tabBarLabel: 'Home',
        //     tabBarIcon: () => (
        //         <MaterialCommunityIcons name="home" color="#FF5733" size={26} />
        //     ),
        // }}
      />
      <Stack.Screen
        name="Home2"
        component={Home2Screen}
        //   options={{
        //     tabBarLabel: 'Home',
        //     tabBarIcon: () => (
        //         <MaterialCommunityIcons name="home" color="#FF5733" size={26} />
        //     ),
        // }}
      />
      <Stack.Screen
        name="Home3"
        component={Home3Screen}
        //   options={{
        //     tabBarLabel: 'Home',
        //     tabBarIcon: () => (
        //         <MaterialCommunityIcons name="home" color="#FF5733" size={26} />
        //     ),
        // }}
      />
      <Stack.Screen
        name="Home4"
        component={Home4Screen}
        //   options={{
        //     tabBarLabel: 'Home',
        //     tabBarIcon: () => (
        //         <MaterialCommunityIcons name="home" color="#FF5733" size={26} />
        //     ),
        // }}
      />
      <Stack.Screen
        name="Home5"
        component={Home5Screen}
        //   options={{
        //     tabBarLabel: 'Home',
        //     tabBarIcon: () => (
        //         <MaterialCommunityIcons name="home" color="#FF5733" size={26} />
        //     ),
        // }}
      />
    </Stack.Navigator>
  );
};
export { HomeScreenNavigator };

const AddScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add"
        component={AddScreen}
        // options={{
        //   tabBarLabel: 'Add',
        //   tabBarIcon: () => (
        //     <Ionicons name="md-add-circle-sharp" color="#FF5733" size={26} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="TotalAdd"
        component={TotalAddScreen}
        // options={{
        //   tabBarLabel: 'Add',
        //   tabBarIcon: () => (
        //     <Ionicons name="md-add-circle-sharp" color="#FF5733" size={26} />
        //   ),
        // }}
      />
    </Stack.Navigator>
  );
};
export { AddScreenNavigator };

const SearchScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        // options={{
        //   tabBarLabel: 'Search',
        //   tabBarIcon: () => (
        //     <MaterialCommunityIcons name="magnify" color="#FF5733" size={26} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="Search1"
        component={Search1Screen}
        // options={{
        //   tabBarLabel: 'Search',
        //   tabBarIcon: () => (
        //     <MaterialCommunityIcons name="magnify" color="#FF5733" size={26} />
        //   ),
        // }}
      />
    </Stack.Navigator>
  );
};
export { SearchScreenNavigator };

const WorkoutScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Workout"
        component={WorkoutScreen}
        //  options={{
        //     tabBarLabel: 'Workout',
        //     tabBarIcon: () => (
        //       <MaterialCommunityIcons name="human-handsup" color="#FF5733" size={26} />
        //     ),
        //   }}
      />
      <Stack.Screen
        name="Workout1"
        component={Workout1Screen}
        //  options={{
        //       tabBarLabel: 'Workout',
        //       tabBarIcon: () => (
        //         <MaterialCommunityIcons name="human-handsup" color="#FF5733" size={26} />
        //       ),
        //     }}
      />
      <Stack.Screen
        name="Workout2"
        component={Workout2Screen}
        // options={{
        //   tabBarLabel: "Workout",
        //   tabBarIcon: () => (
        //     <MaterialCommunityIcons
        //       name="human-handsup"
        //       color="#FF5733"
        //       size={26}
        //     />
        //   ),
        // }}
      />
      <Stack.Screen
        name="Workout3"
        component={Workout3Screen}
        // options={{
        //   tabBarLabel: "Workout",
        //   tabBarIcon: () => (
        //     <MaterialCommunityIcons
        //       name="human-handsup"
        //       color="#FF5733"
        //       size={26}
        //     />
        //   ),
        // }}
      />
    </Stack.Navigator>
  );
};
export { WorkoutScreenNavigator };

const SettingScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        // options={{
        //   tabBarLabel: "Setting",
        //   tabBarIcon: () => (
        //     <AntDesign name="setting" color="#FF5733" size={26} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="Edit1"
        component={EditProfile1Screen}
        // options={{
        //   tabBarLabel: "Setting",
        //   tabBarIcon: () => (
        //     <AntDesign name="setting" color="#FF5733" size={26} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="Edit2"
        component={EditProfile2Screen}
        // options={{
        //   tabBarLabel: "Setting",
        //   tabBarIcon: () => (
        //     <AntDesign name="setting" color="#FF5733" size={26} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="Edit21"
        component={EditProfile21Screen}
        // options={{
        //   tabBarLabel: "Setting",
        //   tabBarIcon: () => (
        //     <AntDesign name="setting" color="#FF5733" size={26} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="Edit22"
        component={EditProfile22Screen}
        // options={{
        //   tabBarLabel: "Setting",
        //   tabBarIcon: () => (
        //     <AntDesign name="setting" color="#FF5733" size={26} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="AddProfile"
        component={AddProfileScreen}
        // options={{
        //   tabBarLabel: "Setting",
        //   tabBarIcon: () => (
        //     <AntDesign name="setting" color="#FF5733" size={26} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="AddProfile1"
        component={AddProfile1Screen}
        // options={{
        //   tabBarLabel: "Setting",
        //   tabBarIcon: () => (
        //     <AntDesign name="setting" color="#FF5733" size={26} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="AddProfile2"
        component={AddProfile2Screen}
        // options={{
        //   tabBarLabel: "Setting",
        //   tabBarIcon: () => (
        //     <AntDesign name="setting" color="#FF5733" size={26} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="AddProfile3"
        component={AddProfile3Screen}
        // options={{
        //   tabBarLabel: "Setting",
        //   tabBarIcon: () => (
        //     <AntDesign name="setting" color="#FF5733" size={26} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="AddProfile4"
        component={AddProfile4Screen}
        // options={{
        //   tabBarLabel: "Setting",
        //   tabBarIcon: () => (
        //     <AntDesign name="setting" color="#FF5733" size={26} />
        //   ),
        // }}
      />
    </Stack.Navigator>
  );
};
export { SettingScreenNavigator };
