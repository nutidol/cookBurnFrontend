import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const WorkoutScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.headerStyle}> Your workout</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Workout1')}
                style={styles.box1Style}>
            </TouchableOpacity>
            <View style={styles.imageStyle}></View>
                <Text style={styles.menuStyle}>Broccoli Chicken</Text>
                <Text style={styles.burnstyle}>Burn: 500 cals</Text>

            <TouchableOpacity style={styles.box2Style}>  </TouchableOpacity>
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
    box1Style: {
        width: 305,
        height: 126,
        borderWidth: 1,
        borderColor: '#FF910D',
        position: 'absolute',
        left: 35,
        top: 72
    },
    box2Style: {
        width: 305,
        height: 126,
        borderWidth: 1,
        borderColor: '#FF910D',
        position: 'absolute',
        left: 35,
        top: 218
    },
    menuStyle: {
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 155,
        top: 112
    },
    burnstyle: {
        fontSize: 10,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "left",
        fontWeight: "bold",
        left: 155,
        top: 131
    },
    imageStyle: {
        position: 'absolute',
        width: 87,
        height: 87,
        backgroundColor: '#FF910D',
        borderRadius: 20,
        left: 50,
        top: 92
    }




});


export default WorkoutScreen;