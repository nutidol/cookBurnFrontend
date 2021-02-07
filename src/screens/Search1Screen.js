import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Search1Screen= ({navigation}) => {
    return(
        <View>
            <Text style={styles.workoutStyle}>Menus</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home4')}
                style={styles.box1Style}>
            </TouchableOpacity>
            <View style={styles.imageStyle}></View>
                <Text style={styles.menuStyle}>Broccoli Chicken</Text>
                <Text style={styles.infostyle}>Difficulty level: hard{'\n'}Duration: 30 mins{'\n'}Energy: 500 cals{'\n'}Ingredients match: 100%</Text>

            <TouchableOpacity style={styles.box2Style}>  </TouchableOpacity>
        </View>
    )
  


};

const styles = StyleSheet.create({
    workoutStyle: {
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 70
    },
    box1Style: {
        width: 305,
        height: 126,
        borderWidth: 1,
        borderColor: '#FF910D',
        position: 'absolute',
        left: 35,
        top: 112
    },
    box2Style: {
        width: 305,
        height: 126,
        borderWidth: 1,
        borderColor: '#FF910D',
        position: 'absolute',
        left: 35,
        top: 258
    },
    menuStyle: {
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 155,
        top: 152
    },
    infostyle: {
        fontSize: 10,
        color: "#FF5733",
        position: 'absolute',
        textAlign: 'left',
        fontWeight: "bold",
        left: 155,
        top: 171
    },
    imageStyle: {
        position: 'absolute',
        width: 87,
        height: 87,
        backgroundColor: '#FF910D',
        borderRadius: 20,
        left: 50,
        top: 132
    }
  
 
});


export default Search1Screen;