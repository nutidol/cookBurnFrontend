import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";



const TotalWorkout = ({ navigation, route }) => {
    const [workout, setWorkout] = useState([]);
    const [sortkey, setSortkey] = useState("");
    AsyncStorage.setItem("sortKey", sortkey)

    useEffect(async () => {

        const id = await AsyncStorage.getItem("userID");
        
        const response = await fetch(`https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/workoutPage/genWorkout/${id}`
        );
        const data = await response.json();
        addDataToArray(data);
        console.log(data)
    }, [route]);

    // useEffect(async () => {
    //     const id = await AsyncStorage.getItem("userID");
    //     console.log("hello");
    //     let isMounted = true;
    //     fetch("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/workoutPage/genWorkout/123")
    //         .then(async(res) => {
    //             const data = await res.json();
    //             if (isMounted ) {
    //             addDataToArray(data);
    //             console.log("hi");
    //             }
    //         })
    //     return () => { isMounted = false };

    // }, [route])

    const addDataToArray = (data) => {
        var array = [];
        var positionImageTop = -42;
        var positionTitleTop = -38;
        var positionEnergyTop = 30;
        var positionBoxTop = -60;
        for (var i in data) {
            positionEnergyTop += 146
            positionImageTop += 146
            positionTitleTop += 146
            positionBoxTop += 146
            var dataWithPosition = { title: data[i].title, url: data[i].url, energy: data[i].energy, topImage: positionImageTop, topTitle: positionTitleTop, topBox: positionBoxTop, topEnergy: positionEnergyTop, sk: data[i].sortKey }
            array.push(dataWithPosition);
        }
        setWorkout(array)
    }
    return (
        <ScrollView>
            <Text style={styles.headerStyle}> Your workout</Text>

            {workout && workout.map(({ title, url, energy, topBox, topEnergy, topImage, topTitle, sk }) => {
                return (
                    <TouchableOpacity
                        key={title}
                        onPress={() => {
                            setSortkey(sk);
                            navigation.navigate("Workout Information");
                        }}>
                        <Image
                            source={url}
                            style={{
                                width: 95,
                                height: 95,
                                left: 50,
                                top: topImage,
                                position: 'absolute',
                            }} />
                        <View style={{
                            left: 36,
                            top: topBox,
                            width: 305,
                            height: 126,
                            borderColor: '#FF5733',
                            borderWidth: 1,
                            position: 'absolute',
                        }}></View>

                        <Text style={{
                            left: 155,
                            top: topTitle,
                            color: '#FF5733',
                            fontSize: 15,
                            position: 'absolute',
                            fontWeight: 'bold',
                            paddingRight:25
                        }}>For:{title}</Text>

                        <Text style={{
                            left: 155,
                            top: topEnergy,
                            color: '#FF5733',
                            fontSize: 15,
                            fontWeight: 'bold',
                            position: 'absolute',
                        }}>Burn:{energy} kcal</Text>
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


export default TotalWorkout;