import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const EditProfile21Screen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.headerStyle}>Your personal information</Text>
            <Text style={styles.subheaderStyle}> Please select the types of menu you like. You can select{"\n"}more than one menu, the selection you made will be used to{"\n"}provide you the satisfying menus</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile22')}
                style={styles.nextboxStyle}>
                <Text style={styles.nextStyle}  >Next</Text>
            </TouchableOpacity>
            <View style={styles.BoxStyle}>   </View >
        </View>
    )



};

const styles = StyleSheet.create({
    headerStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 30,
        textAlign: 'center'
    },
   subheaderStyle: {
        position: 'absolute',
        fontSize: 10,
        left: 36,
        top: 56,
        color: '#FF5733',
    },
    nextboxStyle: {
        borderRadius: 24,
        width: 68,
        height: 24,
        left: 272,
        top: 632,
        backgroundColor: '#FF5733',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    nextStyle: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center',
    },

    BoxStyle: {
        width: 303,
        height: 494,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 107
    }

});


export default EditProfile21Screen;