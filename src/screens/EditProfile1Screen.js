import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile1Screen = ({ navigation }) => {
    const [info, setInfo] = useState({
        carb: 0,
        energy: 0,
        fat: 0,
        fiber: 0,
        protein: 0,
        sodium: 0,
        sugar: 0,
        SK: "",
        PK: ""
    })
    const [personalInfo, setPersonalInfo] = useState({
        height: 0,
        url: "",
        gender: "",
        weight: 0,
        age: 0,
        SK: "",
        PK: ""
    })

    const [updateInfo, setUpdateInfo] = useState({
        PK: "",
        SK: "",
        carb: 0,
        energy: 0,
        fat: 0,
        fiber: 0,
        protein: 0,
        sodium: 0,
        sugar: 0,
        fiber: 0
    })
    useEffect(async () => {
        const id = await AsyncStorage.getItem("userID");
        const response = await fetch(`https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/settingPage/userProfile/${id}`);
        //const response = await fetch("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/settingPage/userProfile/123");
        const data = await response.json();
        setInfo(data.dailyInfo);
        setPersonalInfo(data.personalInfo)
    }, []);

    useEffect(async () => {
        const id = await AsyncStorage.getItem("userID");
        const timestamp = Date.now();
        //const response1 = await fetch("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/homePage/updateDailyInfo/123");
        const response1 = await fetch(`https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/homePage/updateDailyInfo/${id}/${timestamp}`);
        const data1 = await response1.json();
        setUpdateInfo(data1);
       console.log(data1)
    }, []);

    return (
        <View>
            <Text style={styles.header1Style}>Your Personal Information</Text>
            <Text style={styles.header2Style}>Your Daily Information</Text>

            <View style={styles.tableuStyle}>
                <Text style={styles.textStyle}>Gender</Text>
                <Text style={styles.infoStyle}>{personalInfo.gender}</Text>
            </View>
            <View style={styles.tableu1Style}>
                <Text style={styles.textStyle}>Age(year)</Text>
                <Text style={styles.infoStyle}>{personalInfo.age}</Text>
            </View>
            <View style={styles.tableu2Style}>
                <Text style={styles.textStyle}>Weight(kg)</Text>
                <Text style={styles.infoStyle}>{personalInfo.weight}</Text>
            </View>
            <View style={styles.tableu3Style}>
                <Text style={styles.textStyle}>Height(cm)</Text>
                <Text style={styles.infoStyle}>{personalInfo.height}</Text>
            </View>

            <TouchableOpacity
                style={styles.editBoxStyle}
                onPress={() => navigation.navigate('EditProfile2')}>
                <Text style={styles.editStyle}> Edit</Text>
            </TouchableOpacity>
            <View style={styles.tableStyle}>
                <Text style={styles.textStyle}>Energy(Kcal)</Text>
                <Text style={styles.infoStyle}>{updateInfo.energy}/{info.energy}</Text>
            </View>

            <View style={styles.table11Style}>
                <Text style={styles.textStyle}>Total fats(g)</Text>
                <Text style={styles.infoStyle}>{updateInfo.fat}/{info.fat}</Text>
            </View>

            <View style={styles.table2Style}>
                <Text style={styles.textStyle}>Carbohydrate(g)</Text>
                <Text style={styles.infoStyle}>{updateInfo.carb}/{info.carb}</Text>
            </View>
            <View style={styles.table3Style}>
                <Text style={styles.textStyle}>Sugar(g)</Text>
                <Text style={styles.infoStyle}>{updateInfo.sugar}/{info.sugar}</Text>
            </View>

            <View style={styles.table4Style}>
                <Text style={styles.textStyle}>Protein(g)</Text>
                <Text style={styles.infoStyle}>{updateInfo.protein}/{info.protein}</Text>
            </View>
            <View style={styles.table5Style}>
                <Text style={styles.textStyle}>Sodium(mg) </Text>
                <Text style={styles.infoStyle}>{updateInfo.sodium}/{info.sodium}</Text>
            </View>
            
            <View style={styles.table6Style}>
                <Text style={styles.textStyle}>Sodium(mg) </Text>
                <Text style={styles.infoStyle}>{updateInfo.fiber}/{info.fiber}</Text>
            </View>

        </View>
    )

};

const styles = StyleSheet.create({

    infoStyle: {
        color: "#FF5733",
        position: 'absolute',
        zIndex: 5,
        paddingLeft: 200,
        paddingVertical: 7
    },

    textStyle: {
        color: "#FF5733",
        padding: 7,
        fontSize: 15,
    },
    tableStyle: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 310,
        backgroundColor: '#FDCD94',
        zIndex: 1
    },
    table11Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 341,
        backgroundColor: '#EAE8E8',
        zIndex: 1
    },
    table2Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 372,
        backgroundColor: '#FDCD94',
        zIndex: 1
    },
    table3Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 403,
        backgroundColor: '#EAE8E8',
        zIndex: 1
    },
    table4Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 434,
        backgroundColor: '#FDCD94',
        zIndex: 1
    },
    table5Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 465,
        backgroundColor: '#EAE8E8',
        zIndex: 1
    },
    table6Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 496,
        backgroundColor: '#EAE8E8',
        zIndex: 1
    },
    tableuStyle: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 70,
        backgroundColor: '#FDCD94',
        zIndex: 1
    },
    tableu1Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 101,
        backgroundColor: '#EAE8E8',
        zIndex: 1
    },
    tableu2Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 132,
        backgroundColor: '#FDCD94',
        zIndex: 1
    },
    tableu3Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 163,
        backgroundColor: '#EAE8E8',
        zIndex: 1
    },
    header1Style: {
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 30
    },
    editBoxStyle: {
        width: 68,
        height: 24,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 270,
        top: 220,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#FF5733",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    editStyle: {
        fontSize: 10,
        color: "white",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
    },
    header2Style: {
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 275
    },



});


export default EditProfile1Screen;