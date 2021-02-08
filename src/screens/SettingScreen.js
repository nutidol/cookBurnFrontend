import React, { useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';

const SettingScreen= ({navigation}) => {
    return(
        <View>
            <Text style={styles.headerStyle}> Settings</Text>
            <Text style={styles.accountStyle}>Account Settings</Text>
            <Text style={styles.profileStyle} onPress={() => navigation.navigate('EditProfile1')}>Profile</Text>
            <Text style={styles.addStyle} onPress={() => navigation.navigate('AddProfile')}>Add Other's Profile</Text>
        </View>
    )

  
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 70
      },
      accountStyle:{
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 108
      },
      profileStyle:{
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 150
      },
      addStyle:{
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 192
      }
  
 
});


export default SettingScreen;