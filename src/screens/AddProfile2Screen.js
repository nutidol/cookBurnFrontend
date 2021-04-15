import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, ActivityIndicator } from 'react-native';
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddProfile2Screen = ({ navigation }) => {
    const [image, setImage] = useState([]);
    const [people, setPeople] = useState(null);
    const [url, setUrl] = useState("");
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
        const data = await response.json()

        setPeople([
            { person: data[0], left: 47, top: 120 },
            { person: data[1], left: 143, top: 120 },
            { person: data[2], left: 239, top: 120 },
            { person: data[3], left: 47, top: 220 },
            { person: data[4], left: 143, top: 220 },
            { person: data[5], left: 239, top: 220 },
            { person: data[6], left: 47, top: 320 },
            { person: data[7], left: 143, top: 320 },
            { person: data[8], left: 239, top: 320 },
            { person: data[9], left: 47, top: 420 },
            { person: data[10], left: 143, top: 420 },
            { person: data[11], left: 239, top: 420 },

        ]);
    }, []);

    async function postData() {
        if (isLoading) {
            return;
        }
        try {
            const id = await AsyncStorage.getItem("userID");
            const profile = await AsyncStorage.getItem("profileOf");
            console.log(id);
            console.log(profile);

            const article = {
                userID: id,
                profileOf: profile,
                menuTaste: selectedImages
            };
            setLoading(true);
            const res = await axios.post(
                "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/settingPage/othersTasteOfMenus",
                article
            );
            console.log(article);
            navigation.navigate("AddProfile3");
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
                    navigation.navigate("AddProfile1")
                }}>
                <Text style={styles.backStyle}> &lt;&lt;back</Text>
            </TouchableOpacity>
            <Text style={styles.headerStyle}>Add Other's Profile</Text>
            <Text style={styles.subheaderStyle}>Please select <b><u>"the tastes"</u></b> of menu <b><u>he/she like</u></b>. You can select{"\n"}more than one menu, the selection you made will be used to{"\n"}provide them the satisfying menus</Text>
            <TouchableOpacity
                disabled={isLoading}
                onPress={() => {
                    postData();
                    navigation.navigate("AddProfile3");
                }}
                style={styles.nextboxStyle}>
                <Text style={styles.nextStyle}>
                    {isLoading && <ActivityIndicator size="small" />}
                    Next
                 </Text>
            </TouchableOpacity>
            <View style={styles.BoxStyle}></View >
            {people && people.map(({ person, left, top }) => {
                return (

                    <TouchableOpacity
                        key={person.SK}
                        onPress={() => {
                            if (isSelected(person.url)) {
                                removeFromSelectedImages(person.url);
                            } else {
                                setSelectedImages([...selectedImages, person])
                            }
                        }}
                    >
                        <Image
                            source={{ uri: person.url }}
                            style={{
                                width: 84,
                                height: 84,
                                left,
                                top,
                                position: "absolute",
                                opacity: isSelected(person.url) ? 1 : 0.3,
                            }}
                        />
                    </TouchableOpacity>

                );
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    backStyle:{
        color: '#FF5733',
        fontSize: 12,
        top:10,
        position: 'absolute',
      },
    headerStyle: {
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 30
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


export default AddProfile2Screen;