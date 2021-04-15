import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const Search1Screen = ({ navigation }) => {
    const [info, setInfo] = useState([]);
    const [sortkey, setSortkey] = useState("");
    AsyncStorage.setItem("sk", sortkey )


    useEffect(async () => {
        const id = await AsyncStorage.getItem("userID");
        const response = await fetch(
            "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/menuPage/menus/123/1617946739991"
        );
        const data = await response.json();
        addDataToArray(data);
        console.log(data)
    }, []);

    console.log(sortkey);
    const addDataToArray = (data) => {
        var array = [];
        var positionImageTop = -42;
        var postitionTitleTop = -38;
        var postitionBoxTop = -60;
        var postitionDurationTop = -15;
        var postitionEnergyTop = -3;
        for (var i in data) {
            var positionImageLeft = 50;
            var positionTitleLeft = 162;
            var positionDurationLeft = 162;
            var positionBoxLeft = 36;
            var positionEnergyLeft = 162;
            positionImageTop += 146;
            postitionTitleTop += 146;
            postitionBoxTop += 146;
            postitionDurationTop += 146;
            postitionEnergyTop += 146;
            var dataWithPosition = {
                duration: data[i].duration, title: data[i].title, url: data[i].url, topImage: positionImageTop,
                leftImage: positionImageLeft, topTitle: postitionTitleTop, leftTitle: positionTitleLeft, topBox: postitionBoxTop,
                leftBox: positionBoxLeft, topDuration: postitionDurationTop, leftDuration: positionDurationLeft, energy: data[i].nutrition.energy,
                leftEnergy: positionEnergyLeft, topEnergy: postitionEnergyTop, sk: data[i].SK
            }
            array.push(dataWithPosition)
        }
        setInfo(array)
        console.log(array)
    }
    return (
        <ScrollView>
            <Text style={styles.headerStyle}>Menus</Text>

            {info && info.map(({ url, topImage, leftImage, topTitle, leftTitle, title, duration, topBox, leftBox, leftDuration, topDuration, leftEnergy, topEnergy, energy, sk }) => {
                return (
                    <TouchableOpacity
                    key = {sk}
                    onPress={() => {setSortkey(sk);
                                    navigation.navigate("Search2");
                                    
                    }}>
                        <Image
                            source={url}
                            style={{
                                width: 95,
                                height: 95,
                                left: leftImage,
                                top: topImage,
                                position: 'absolute',
                            }} />
                        <Text style={{
                            left: leftTitle,
                            top: topTitle,
                            color: '#FF5733',
                            fontSize: 15,
                            fontWeight: 'bold',
                            position: 'absolute'
                        }}>{title}</Text>

                        <Text style={{
                            left: leftDuration,
                            top: topDuration,
                            color: '#FF5733',
                            fontSize: 10,
                            position: 'absolute',
                        }}>Duration: {duration} mins</Text>

                        <Text style={{
                            left: leftEnergy,
                            top: topEnergy,
                            color: '#FF5733',
                            fontSize: 10,
                            position: 'absolute',
                        }}>Energy:{energy} kcal</Text>

                        <View style={{
                            left: leftBox,
                            top: topBox,
                            width: 305,
                            height: 126,
                            borderColor: '#FF5733',
                            borderWidth: 1,
                            position: 'absolute',
                        }}></View>
                    </TouchableOpacity>

                );
            })}
        </ScrollView>
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



});


export default Search1Screen;