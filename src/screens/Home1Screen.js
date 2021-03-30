import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import AsyncStorage from "@react-native-async-storage/async-storage";



const Home1Screen = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(true)
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
       // console.log(data);
       console.log(info.energy)
    }, []);

  



    return (<View>
        <Modal visible={modalOpen} animationType='slide'>
            <View style={styles.modalContent}>
                <MaterialIcons
                    style={{ ...styles.modalToggle, ...styles.modalClose }}
                    name='close'
                    size={24}
                    color='#FF5733'
                    onPress={() => setModalOpen(false)} />
                <Text style={styles.welcomeStyle}>Welcome to the</Text>
                <Text style={styles.cookburnStyle}>CookBurn!</Text>
                <Image style={styles.logoStyle}
                    source={require('../../assets/cookburn.png')} />
                <Text style={styles.enjoyStyle}>Enjoy:)</Text>
            </View>
        </Modal>



        <Text style={styles.Header1Style}> Your daily information </Text>

        <Text style={styles.Header2Style}> Your recent activities </Text>
        <Text style={styles.historyStyle} onPress={() => navigation.navigate('Home2')}> See full history &gt; </Text>
        <TouchableOpacity style={styles.boxStyle}
            onPress={() => navigation.navigate('Home2')}>
            <Text style={styles.menuStyle}>Menu name: </Text>
            <Text style={styles.energyStyle}>enerygy: </Text>
            <Text style={styles.dateStyle}>date: </Text>
            <Text style={styles.timeStyle}>time: </Text>
        </TouchableOpacity>

        <View style={styles.tableStyle}>
            <Text style={styles.textStyle}>Energy(Kcal)                                      {info.energy} </Text>
        </View>
        <View style={styles.table1Style}>
            <Text style={styles.textStyle}>Total fats(g)                                     {info.fat}</Text>
        </View>
        <View style={styles.table2Style}>
            <Text style={styles.textStyle}>Carbohydrate(g)                                    {info.carb}</Text>
        </View>
        <View style={styles.table3Style}>
            <Text style={styles.textStyle}>Sugar(g)                                            {info.sugar}</Text>
        </View>

        <View style={styles.table4Style}>
            <Text style={styles.textStyle}>Protein(g)                                         {info.protein}</Text>
        </View>
        <View style={styles.table5Style}>
            <Text style={styles.textStyle}>Sodium(g)                                          {info.sodium} </Text>
        </View>

    </View>

    );
};

const styles = StyleSheet.create({
    textStyle:{
        color: "#FF5733",
        padding: 7,
        fontSize: 15
    },
    tableStyle: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top:70,
        backgroundColor: '#FDCD94',
    },
    table1Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 101,
        backgroundColor: '#EAE8E8',
    },
    table2Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 132,
        backgroundColor: '#FDCD94',
    },
    table3Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 163,
        backgroundColor: '#EAE8E8',
    },
    table4Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 194,
        backgroundColor: '#FDCD94',
    },
    table5Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 225,
        backgroundColor: '#EAE8E8',
    },
    modalToggle: {
        marginBottom: 100,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    },
    logoStyle: {
        width: 157.4,
        height: 157.4,
        position: 'absolute',
        left: 109,
        top: 327,
        zIndex: 5,
        alignItems: 'center'
    },
    welcomeStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 118,
        top: 248,
        textAlign: 'center'
    },
    cookburnStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 143,
        top: 281,
        textAlign: 'center'
    },
    enjoyStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 155,
        top: 520,
        textAlign: 'center'
    },
    Header1Style: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 30,
        textAlign: 'center'
    },
    Header2Style: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 264,
        textAlign: 'center'
    },
    historyStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 293,
        textAlign: 'center'
    },
    boxStyle: {
        width: 305,
        height: 126,
        borderColor: '#FF5733',
        borderWidth: 1,
        left: 35,
        top: 318
    },
    menuStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        left: 130,
        top: 30
    },
    energyStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        left: 130,
        top: 50
    },
    dateStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        left: 130,
        top: 70

    },
    timeStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        left: 130,
        top: 90

    }


});

export default Home1Screen;
