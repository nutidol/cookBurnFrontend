import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';


const Home3Screen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.historyStyle}>Your History</Text>
            <Text style={styles.inStyle}>Menu Information:</Text>
            <View style={styles.box1Style}> </View>
            <Text style={styles.preStyle}>Menu Preferences:</Text>
            <View style={styles.box2Style}> </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home4')}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Cook again</Text>
            </TouchableOpacity>

        </View>
    );
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
    buttonStyle: {
        width: 120,
        height: 37,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 219,
        top: 691,
        borderRadius: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    buttonTextStyle: {
        fontSize: 10,
        color: "white",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
    },
    inStyle: {
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 246
    },
    preStyle: {
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 534
    },
    box1Style:{
        width: 302,
        height: 248,
        borderColor: '#FF5733',
        borderWidth: 1,
        position: 'absolute',
        left: 37,
        top: 274
    },
    box2Style:{
        width: 302,
        height: 107,
        borderColor: '#FF5733',
        borderWidth: 1,
        position: 'absolute',
        left: 37,
        top: 562
    },


});


export default Home3Screen;