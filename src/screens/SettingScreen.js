import React, { useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';

const SettingScreen= ({navigation}) => {
    return(
        <View>
            <Text style={styles.textStyle}> Settings</Text>
            <Text>Account Settings</Text>
            <Text onPress={() => navigation.navigate('EditProfile1')}>Profile</Text>
            <Text onPress={() => navigation.navigate('AddProfile')}>Add Other's Profile</Text>
        </View>
    )

  
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 70
      }
  
 
});


export default SettingScreen;