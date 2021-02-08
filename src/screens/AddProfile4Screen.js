import React, { useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';


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
  
 
});


export default AddProfile4Screen;