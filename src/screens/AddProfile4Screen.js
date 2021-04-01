import React, { useState, useEffect } from 'react';
import { StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


const AddProfile4Screen= () => {
    const [info, setInfo] = useState({
        PK: "",
        SK: "",
        carb: 0,
        energy: 0,
        fat: 0,
        fiber: 0,
        protein: 0,
        sodium: 0,
        sugar: 0,
    })
    useEffect(async () => {
        const id = await AsyncStorage.getItem("userID");
        const response = await fetch("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/homePage/dailyInfo/123");
        const data = await response.json();
        setInfo(data[0]);
    }, []);

    return (
        <View>
            <Text style={styles.header1Style}>Your Personal Information</Text>
            <Text style={styles.header2Style}>Your Daily Information</Text>
            
            <View style={styles.tableuStyle}>
                <Text style={styles.textStyle}>Name</Text>
                <Text style={styles.infoStyle}>/ </Text>
            </View>
            <View style={styles.tableu1Style}>
                <Text style={styles.textStyle}>Gender</Text>
                <Text style={styles.infoStyle}>/ </Text>
            </View>
            <View style={styles.tableu2Style}>
                <Text style={styles.textStyle}>Age(year)</Text>
                <Text style={styles.infoStyle}>/ </Text>
            </View>
            <View style={styles.tableu3Style}>
                <Text style={styles.textStyle}>Weight(kg)</Text>
                <Text style={styles.infoStyle}>/ </Text>
            </View>
            <View style={styles.tableu4Style}>
                <Text style={styles.textStyle}>Height(cm)</Text>
                <Text style={styles.infoStyle}>/ </Text>
            </View>
            
            <TouchableOpacity
                style={styles.editBoxStyle}
                onPress={() => navigation.navigate('AddProfile')}>
                <Text style={styles.editStyle}> Edit</Text>
            </TouchableOpacity>

            <View style={styles.tableStyle}>
                <Text style={styles.textStyle}>Energy(Kcal)</Text>
                <Text style={styles.infoStyle}>/ </Text>
            </View>

            <View style={styles.table11Style}>
                <Text style={styles.textStyle}>Total fats(g)</Text>
                <Text style={styles.infoStyle}>/</Text>
            </View>

            <View style={styles.table2Style}>
                <Text style={styles.textStyle}>Carbohydrate(g)</Text>
                <Text style={styles.infoStyle}>/ </Text>
            </View>
            <View style={styles.table3Style}>
                <Text style={styles.textStyle}>Sugar(g)</Text>
                <Text style={styles.infoStyle}>/ </Text>
            </View>

            <View style={styles.table4Style}>
                <Text style={styles.textStyle}>Protein(g)</Text>
                <Text style={styles.infoStyle}>/ </Text>
            </View>
            <View style={styles.table5Style}>
                <Text style={styles.textStyle}>Sodium(g) </Text>
                <Text style={styles.infoStyle}>/ </Text>
            </View>

        </View>
    )
  


};

const styles = StyleSheet.create({
    tableStyle: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 330,
        backgroundColor: '#FDCD94',
        zIndex: 1
    },
    table11Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 361,
        backgroundColor: '#EAE8E8',
        zIndex: 1
    },
    table2Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 392,
        backgroundColor: '#FDCD94',
        zIndex: 1
    },
    table3Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 423,
        backgroundColor: '#EAE8E8',
        zIndex: 1
    },
    table4Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 454,
        backgroundColor: '#FDCD94',
        zIndex: 1
    },
    table5Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 485,
        backgroundColor: '#EAE8E8',
        zIndex: 1
    },
    infoStyle: {
        color: "#FF5733",
        position: 'absolute',
        zIndex: 5,
        paddingLeft: 250,
        paddingVertical: 7
    },

    textStyle: {
        color: "#FF5733",
        padding: 7,
        fontSize: 15,
    },
  
    header1Style:{
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        left: 36,
         top: 30,
         color: '#FF5733',
     },
     header2Style:{
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        left: 36,
         top: 290,
         color: '#FF5733',
     },
     editBoxStyle: {
        width: 68,
        height: 24,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 270,
        top: 250,
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
    tableu4Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 194,
        backgroundColor: '#EAE8E8',
        zIndex: 1
    },

 
});


export default AddProfile4Screen;