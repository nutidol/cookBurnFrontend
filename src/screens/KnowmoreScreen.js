import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const KnowmoreScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.squareStyle} ></View>
            <Image style={styles.logoStyle}
                source={require('../../assets/cookburn.png')} />
            <Text style={styles.cookburnStyle}>CookBurn</Text>
            <Text style={styles.textOnestyle}> We want to know more {"\n"}about you so that we can {"\n"}generate the best suit {"\n"}possible menus and {"\n"}recipe for you!!</Text>
            <Text style={styles.textTwostyle}> We recommend you to do the following survey {"\n"}before start using the application for the best {"\n"} results, however, you can do it later or change it {"\n"}anytime while using the application.{"\n"}</Text>
            <Text style={styles.textThreestyle}>Quick tips from us:{"\n"}1.In order to generate menus you're requirred{"\n"}to add your ingredients first.{"\n"}2.You can also burn out caloroies based on{"\n"}your cooked menu.{"\n"}3.You can generate the menu for other people{"\n"}by just add their personal information in{"\n"}setting page</Text>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate('OnBoarding1')}>

                <Text style={styles.textbuttonStyle} >Let's start</Text>
            </TouchableOpacity>

        </ScrollView>


    );
};

const styles = StyleSheet.create({
    logoStyle: {
        width: 157.4,
        height: 157.4,
        position: 'absolute',
        left: 109,
        top: 105,
        zIndex: 5
    },
    squareStyle: {
        width: 375,
        height: 314,
        backgroundColor: '#FF5733',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100

    },
    cookburnStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        left: 90,
        top: 260

    },

    buttonStyle: {
        width: 295,
        height: 37,
        backgroundColor: '#FF5733',
        position: 'absolute',
        left: 40,
        top: 730,
        borderRadius: 24,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    textbuttonStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',

    },
    textOnestyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        textAlign: 'center',
        position: 'absolute',
        left: 70,
        top: 364
    },
    textTwostyle: {
        fontSize: 12,
        color: '#FF5733',
        textAlign: 'center',
        position: 'absolute',
        left: 50,
        top: 500
    },
    textThreestyle:{
        fontSize: 12,
        color: '#FF5733',
        textAlign: 'center',
        position: 'absolute',
        left: 50,
        top: 590
    }


});

export default KnowmoreScreen;

