import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const WorkoutInformation = ({ navigation }) => {
    const [workout, setWorkout] = useState([]);
    const [header, setHeader] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [url, setUrl] = useState("");
    const [top, setTop] = useState(0);
    const [dt, setDt] = useState([]);

 
    useEffect(async () => {
        const id = await AsyncStorage.getItem("userID");
        const sk = await AsyncStorage.getItem("sortKey")
        //const response = await fetch("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/workoutPage/workoutInfo/123/cooked_1617946739991_11111");
        const response = await fetch(`https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/workoutPage/workoutInfo/${id}/${sk}`);
        const data = await response.json();
        setDt(data)
        addDataToArray(data);
        console.log(data)
    }, []);

    useEffect(() => {
        if (!url) return;
    }, [url]);


    async function postData() {
        if (isLoading) {
            return;
        }
        try {
            const id = await AsyncStorage.getItem("userID");
            const timestamp = Date.now();
            const article = {
                userID: id,
                timestamp: timestamp,
                workoutInfo: dt
            };
            setLoading(true);
            console.log(article);
            const res = await axios.post(
                "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/workoutPage/workoutInfo",
                article
            );
            console.log(res);
            navigation.navigate('Total Workout', {refresh: true});
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const addDataToArray = (data) => {

        var headerArray = [];
        var headerWithPosition = { title: data[0].title, energy: data[0].energy };
        headerArray.push(headerWithPosition);
        setHeader(headerArray);

        var array = [];
        var positionNameTop = -11
        var positionUnitTop = 12
        var positionImageTop = -31
        for (var j in data[0].workout) {
            positionNameTop += 146
            positionUnitTop += 146
            positionImageTop += 146

            var dataWithPosition = {
                name: data[0].workout[j].name, unit: data[0].workout[j].unit, url: data[0].workout[j].url, qty: data[0].workout[j].qty,
                topName: positionNameTop, topImage: positionImageTop, topUnit: positionUnitTop
            }
            array.push(dataWithPosition);
        }
        setWorkout(array);
        setTop(positionImageTop);
    }

    return (
        <ScrollView>
            {header && header.map(({ title, energy }) => {
                return (

                    <TouchableOpacity
                        key={title}>
                        <Text style={{ left: 36, top: 30, color: '#FF5733', fontSize: 20, position: 'absolute', fontWeight: 'bold' }}>For: {title}</Text>
                        <Text style={{ left: 36, top: 80, color: '#FF5733', fontSize: 15, position: 'absolute', fontWeight: 'bold' }}>Burn: {energy} kcal</Text>
                    </TouchableOpacity>

                );
            })}

            {workout && workout.map(({ name, url, unit, qty, topImage, topName, topUnit }) => {
                return (

                    <TouchableOpacity
                        key={name}>
                        <Image
                            source={url}
                            style={{
                                width: 130,
                                height: 130,
                                left: 50,
                                top: topImage,
                                position: 'absolute',
                            }} />
                        <Text style={{ left: 200, top: topName, color: '#FF5733', fontSize: 15, position: 'absolute', fontWeight: 'bold' }}>{name}</Text>
                        <Text style={{ left: 200, top: topUnit, color: '#FF5733', fontSize: 10, position: 'absolute' }}>{qty}</Text>
                        <Text style={{ left: 216, top: topUnit, color: '#FF5733', fontSize: 10, position: 'absolute' }}>{unit}</Text>
                    </TouchableOpacity>

                );
            })}

            <TouchableOpacity
                disabled={isLoading}
                onPress={() => {
                    postData();
                }}
                style={{
                    width: 120, height: 37, backgroundColor: '#FF5733', position: 'absolute', left: 239,
                    top: top + 146, borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10
                }}>
                <Text style={styles.doneStyle}>  {isLoading && <ActivityIndicator size="small" />}Finish</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    doneStyle: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }

});

export default WorkoutInformation;