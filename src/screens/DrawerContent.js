import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Amplify, { Auth, API } from "aws-amplify";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export function DrawerContent({ props, updateAuthState }) {
  const [user, setUser] = useState({
    userName: "",
    url: ""
  })

  useEffect(async () => {
    const id = await AsyncStorage.getItem("userID");
    const response = await fetch(
      `https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/homePage/username/${id}`
    );
    const data = await response.json();
    console.log(data);
    console.log(data.userName);
    setUser(data);
  }, []);

  console.log(user);

  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState("loggedOut");
      console.log("Sign out success")
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.bar}>
          <Text style={styles.title}>Cook Burn</Text>

          <Image style={styles.cookburn}
            source={require('../../assets/cookburn.png')} />
        </View>

        <Text style={styles.username}>{user.userName}</Text>
        <Image
          source={{ uri: user.url }}
          style={{
            width: 88,
            height: 101,
            left: 100,
            top: 50,
            position: "absolute",
          }}
        />

      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <Icon
              name="ios-exit-outline"
              color='#FF5733'
              size={size}
            />
          )}
          label="Sign Out"

          onPress={signOut}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 75,
    fontWeight: 'bold',
    color: '#FF5733',
    zIndex:1
  },
 
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#FF5733',
    borderTopWidth: 1
  },
  username: {
    fontSize: 16,
    marginTop: 135,
    marginLeft: 100,
    fontWeight: 'bold',
    color: '#FF5733'
  },
  cookburn: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginTop: 6,
    marginLeft: 180,
    zIndex: 5
  },
  bar:{
    width: 300,
    height: 45,
    backgroundColor: '#FDCD94',
    position:'absolute',
    zIndex:1,
    top: 0
  }
});


