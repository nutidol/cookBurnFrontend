import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const AddProfileScreen = ({ navigation }) => {

    return (
        <View>
            <Text style={styles.header1Style}>Add Other's AddProfile</Text>
            <Text style={styles.textStyle}> Please add others's personal information, so we can calculate{'\n'} their daily intake information for you!</Text>
            <TouchableOpacity style={styles.addStyle}
                onPress={() => navigation.navigate('AddProfile1')}>
                <View style={styles.iconStyle}>
                    <Ionicons
                        name='add'
                        color='#FF5733'
                        size={50}
                    >
                    </Ionicons>
                </View>

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
        top: 30
    },
    textStyle: {
        fontSize: 10,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "left",
        left: 36,
        top: 103
    },
    addStyle: {
        width: 126,
        height: 143,
        left: 211,
        top: 150,
        borderRadius: 27,
        borderWidth: 1,
        borderColor: '#FF5733'

    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }



});


export default AddProfileScreen;