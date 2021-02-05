import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';


const Home5Screen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.historyStyle}> Your History</Text>
            
            <TouchableOpacity
                onPress={() => navigation.navigate('Workout3')}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}> Workout again</Text>
            </TouchableOpacity>

        </View>
    )

};

const styles = StyleSheet.create({
    historyStyle: {
        fontSize: 20,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        left: 36,
        top: 70,
        fontWeight: "bold",
    },
    buttonTextStyle: {
        fontSize: 10,
        color: "white",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
    },
    buttonStyle: {
        width: 120,
        height: 37,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 219,
        top: 248,
        borderRadius: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },


});


export default Home5Screen;