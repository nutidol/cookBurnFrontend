
import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile21Screen = ({ navigation }) => {

   
    const [info, setInfo] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);

    const isSelected = (image) => {
        for (var i in selectedImages) {
            if (selectedImages[i].url === image)
                return true;
        }
        return false;
    }

    const removeFromSelectedImages = (image) => {
        var newSelected = [];
        for (var i in selectedImages) {
            if (selectedImages[i].url !== image)
                newSelected.push(selectedImages[i]);
        }
        setSelectedImages(newSelected);
    }
    console.log(selectedImages);

    useEffect(async () => {
        const response = await fetch(
            "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/tasteOfMenu"
        );
        const data = await response.json();
        addDataToArray(data);
        console.log(data);

    }, []);

    const addDataToArray = (data) => {
        var array = [];
        var positionNameTop = 100;
        var positionImageTop = 10;
        for (var i in data) {

            if (i % 3 === 0) {
                positionImageTop += 120;
                positionNameTop += 120;
                var positionImageLeft = 47;
                var positionNameLeft = 47
            }
            else if (i % 3 === 1) {
                positionImageLeft += 96;
                positionNameLeft += 96;
            }
            else if (i % 3 == 2) {
                positionImageLeft += 96;
                positionNameLeft += 96;

            }
            var dataWithPosition = { url: data[i].url, name: data[i].title, topImage: positionImageTop, leftImage: positionImageLeft, topName: positionNameTop, leftName: positionNameLeft, dt: data[i] }
            array.push(dataWithPosition);

        }
        
        console.log(array);
        setInfo(array);
    }

    async function postData() {
        if (isLoading) {
            return;
        }
        try {
            const id = await AsyncStorage.getItem("userID");
            console.log(id);

            const article = {
                userID: id,
                menuTaste: selectedImages
            };
            setLoading(true);
            const res = await axios.post(
                "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/tasteOfMenu",
                article
            );
            console.log(article);
            navigation.navigate("EditProfile22");
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("EditProfile1")
                }}>
                <Text style={styles.backStyle}> &lt;&lt;back</Text>
            </TouchableOpacity>

            <Text style={styles.headerStyle}>Your personal information</Text>
            <Text style={styles.subheaderStyle}> Please select <b><u>"the tastes"</u></b> of menus you like. You can select{"\n"}more than one menu, the selection you made will be used to{"\n"}provide you the satisfying menus</Text>

            <TouchableOpacity
                disabled={isLoading}
                onPress={() => {
                    postData();
                }}
                style={styles.nextboxStyle}>
                <Text style={styles.nextStyle}>
                    {isLoading && <ActivityIndicator size="small" />}Next</Text>
            </TouchableOpacity>
            <TouchableOpacity
               
                onPress={() => {
                  navigation.navigate("EditProfile1")
                }}
                style={styles.skipboxStyle}>
                <Text style={styles.skipStyle}>Skip</Text>

            </TouchableOpacity>
            <View style={styles.BoxStyle}> </View >

            {info && info.map(({ url, leftImage, topImage, name, leftName, topName, dt }) => {
                return (
                    <TouchableOpacity
                        key={name}
                        onPress={() => {
                            if (isSelected(url)) {
                                removeFromSelectedImages(url);
                            } else {
                                setSelectedImages([...selectedImages,dt])
                            }
                        }}
                    >
                        <Image
                            source={{ uri: url }}
                            style={{
                                width: 84,
                                height: 84,
                                left: leftImage,
                                top: topImage,
                                position: "absolute",
                                opacity: isSelected(url) ? 1 : 0.3,
                            }}
                        />

                        <Text style={{
                            left: leftName,
                            top: topName,
                            color: '#FF5733',
                            fontSize: 10,
                            position: 'absolute',
                        }}>{name}</Text>


                    </TouchableOpacity>

                );
            })}
        </View>
    )

};

const styles = StyleSheet.create({
    backStyle: {
        color: '#FF5733',
        fontSize: 12,
        top: 10,
        position: 'absolute',
    },
    headerStyle: {
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
        paddingHorizontal: 10,
        position : 'absolute'
    },
    skipboxStyle: {
        borderRadius: 24,
        width: 68,
        height: 24,
        left: 190,
        top: 632,
        backgroundColor: 'white',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        zIndex :5,
        position : 'absolute'
    },
    nextStyle: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center',
    },
    skipStyle: {
        fontSize: 10,
        color: '#FF5733',
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
