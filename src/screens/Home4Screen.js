import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Home4Screen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.menuStyle}>Menu Name</Text>
            <View style={styles.box1Style}> </View>
            <Text style={styles.igdStyle}>Ingredients:</Text>
            <Text style={styles.rcpStyle}>Recipe:</Text>
            <Text style={styles.inStyle}>Menu Information:</Text>


            <TouchableOpacity
                onPress={() => navigation.navigate('Home1')}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}> Done</Text>
            </TouchableOpacity>

        </View>
    )

};

const styles = StyleSheet.create({
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
    menuStyle: {
        fontSize: 20,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        left: 36,
        top: 70,
        fontWeight: "bold",
    },
   igdStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        fontWeight: "bold",
        left: 36,
        top: 247,
    },
    rcpStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        fontWeight: "bold",
        left: 36,
        top: 371,
    },
    inStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        fontWeight: "bold",
        left: 36,
        top: 490,
    },
    box1Style:{
        width: 303,
        height: 129,
        backgroundColor: '#FF910D',
        borderRadius: 20,
        position: 'absolute',
        left: 37,
        top: 104
    }



});


export default Home4Screen;