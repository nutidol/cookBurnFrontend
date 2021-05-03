import React, { useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';

const SettingScreen= ({navigation}) => {
    return(
        <View>
            <Text style={styles.headerStyle}>Settings</Text>
            <Text style={styles.profileStyle} onPress={() => navigation.navigate('User profile')}>Profile &gt;</Text>
            <Text style={styles.addStyle} onPress={() => navigation.navigate('Other’s Profile')}>Other's Profile &gt;</Text>
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
        top: 30
      },
  
      profileStyle:{
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 68
      },
      addStyle:{
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 110
      }
  
 
});


export default SettingScreen;