import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native';


const EditProfile1Screen = ({ navigation }) => {

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
    header1Style: {
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 70
    },
    editBoxStyle: {
        width: 68,
        height: 24,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 270,
        top: 226,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#FF5733",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    editStyle: {
        fontSize: 10,
        color: "white",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
    },
    header2Style: {
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 276
    }


});


export default EditProfile1Screen;