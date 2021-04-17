import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from "@react-native-async-storage/async-storage";



const Home1Screen = ({ navigation, route }) => {
    const [detail, setDetail] = useState([]);
    const [sortkey, setSortkey] = useState("");
    const [modalOpen, setModalOpen] = useState(true)

    AsyncStorage.setItem("sk", sortkey)

    const mapSK = (sortkey) =>{
        if(sortkey.includes("workout")) {
            navigation.navigate("Workout1")
        }else{
            navigation.navigate("Search2")
        }
    }
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
        fiber: 0
    });
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
       // const response = await fetch("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/homePage/dailyInfo/123");
        const response = await fetch(`https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/homePage/dailyInfo/${id}`);
        const data = await response.json();
        setInfo(data[0]);

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

    useEffect(async () => {
        const id = await AsyncStorage.getItem("userID");
        const response2 = await fetch(
            `https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/homePage/recentActivities/${id}`
        );
        const data2 = await response2.json();
        addDataToArray(data2);
        console.log(data2)
    }, [route]);


    const addDataToArray = (data2) => {
        var array = [];
        var positionImageTop = 241;
        var postitionNameTop = 245;
        var postitionBoxTop = 223;
        var postitionEnergyTop = 290;
        for (var i in data2) {
             positionImageTop += 146 ;
             postitionNameTop += 146 ;
             postitionBoxTop += 146 ;
             postitionEnergyTop += 146 ;
             var dataWithPosition = { name:data2[i].name, url: data2[i].url, energy: data2[i].energy, topImage: positionImageTop, topName: postitionNameTop, topEnergy: postitionEnergyTop, topBox: postitionBoxTop, sk: data2[i].SK}
             array.push(dataWithPosition);
        }
        setDetail(array);
     
    }


    return (<ScrollView>
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
        

        <View style={styles.tableStyle}>
            <Text style={styles.textStyle}>Energy(Kcal)</Text>
            <Text style={styles.infoStyle}>{updateInfo.energy}/ {info.energy}</Text>
        </View>

        <View style={styles.table1Style}>
            <Text style={styles.textStyle}>Total fats(g)</Text>
            <Text style={styles.infoStyle}>{updateInfo.fat}/ {info.fat}</Text>
        </View>

        <View style={styles.table2Style}>
            <Text style={styles.textStyle}>Carbohydrate(g)</Text>
            <Text style={styles.infoStyle}>{updateInfo.carb}/ {info.carb}</Text>
        </View>
        <View style={styles.table3Style}>
            <Text style={styles.textStyle}>Sugar(g)</Text>
            <Text style={styles.infoStyle}> {updateInfo.sugar}/ {info.sugar}</Text>
        </View>

        <View style={styles.table4Style}>
            <Text style={styles.textStyle}>Protein(g)</Text>
            <Text style={styles.infoStyle}>{updateInfo.protein}/ {info.protein}</Text>
        </View>
        <View style={styles.table5Style}>
            <Text style={styles.textStyle}>Sodium(mg)</Text>
            <Text style={styles.infoStyle}>{updateInfo.sodium}/ {info.sodium}</Text>
        </View>

        <View style={styles.table6Style}>
            <Text style={styles.textStyle}>Fiber(g)</Text>
            <Text style={styles.infoStyle}>{updateInfo.fiber}/ {info.fiber}</Text>
        </View>

      
            

            {detail && detail.map(({ url, name, energy, topBox, topEnergy, topImage, topName, sk}) => {
                return (
                    <TouchableOpacity
                    key = {sk}
                    onPress={() => { 
                        setSortkey(sk);
                        mapSK(sk);
                        
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
                        <Text style={{
                            left: 162,
                            top: topName,
                            color: '#FF5733',
                            fontSize: 15,
                            fontWeight: 'bold',
                            position: 'absolute'
                        }}>{name}</Text>


                        <Text style={{
                            left: 162,
                            top: topEnergy,
                            color: '#FF5733',
                            fontSize: 10,
                            position: 'absolute',
                        }}>Energy:{energy} kcal</Text>

                        <View style={{
                            left: 36,
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

    );
};

const styles = StyleSheet.create({
    infoStyle: {
        color: "#FF5733",
        position: 'absolute',
        zIndex: 5,
        paddingLeft: 220,
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
        top: 70,
        backgroundColor: '#FDCD94',
        zIndex:1
    },
    table1Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 101,
        backgroundColor: '#EAE8E8',
        zIndex:1
    },
    table2Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 132,
        backgroundColor: '#FDCD94',
        zIndex:1
    },
    table3Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 163,
        backgroundColor: '#EAE8E8',
        zIndex:1
    },
    table4Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 194,
        backgroundColor: '#FDCD94',
        zIndex:1
    },
    table5Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 225,
        backgroundColor: '#EAE8E8',
        zIndex:1
    },
    table6Style: {
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: 256,
        backgroundColor: '#EAE8E8',
        zIndex:1
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
        top: 295,
        textAlign: 'center'
    },
    historyStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 324,
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

    },



});

export default Home1Screen;
