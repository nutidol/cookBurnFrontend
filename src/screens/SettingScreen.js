import React, { useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';

const SettingScreen= ({navigation}) => {
    return(
        <View>
            <Text style={styles.headerStyle}> Settings</Text>
            <Text style={styles.accountStyle}>Account Settings &gt;</Text>
            <Text style={styles.profileStyle} onPress={() => navigation.navigate('EditProfile1')}>Profile &gt;</Text>
            <Text style={styles.addStyle} onPress={() => navigation.navigate('AddProfile')}>Add Other's Profile &gt;</Text>
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
      accountStyle:{
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 68
      },
      profileStyle:{
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 110
      },
      addStyle:{
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 152
      }
  
 
});


export default SettingScreen;