import React, { useState } from 'react';
import { StyleSheet,Text, View, TouchableOpacity} from 'react-native';


const AddProfile4Screen= () => {
    return (
        <View>
            <Text style={styles.header1Style}>Your Personal Information</Text>
            <Text style={styles.header2Style}>Your Daily Information</Text>
            <TouchableOpacity
                style={styles.editBoxStyle}
                onPress={() => navigation.navigate('EditProfile2')}>
                <Text style={styles.editStyle}> Edit</Text>
            </TouchableOpacity>

        </View>
    )
  


};

const styles = StyleSheet.create({
  
    header1Style:{
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        left: 36,
         top: 30,
         color: '#FF5733',
     },
     header2Style:{
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        left: 36,
         top: 299,
         color: '#FF5733',
     },
     editboxStyle:{
        width: 68,
        height: 24,
        backgroundColor: '#FF5733',
        position:'absolute',
        left: 267,
        top: 247,
        borderRadius: 24,
        display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       paddingHorizontal: 10 
    },
    editStyle:{
        fontSize: 10,
        color: 'white',
        textAlign: 'center'
    },

 
});


export default AddProfile4Screen;