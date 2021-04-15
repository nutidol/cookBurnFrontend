import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile2Screen = ({ navigation }) => {
    const [image, setImage] = useState("");
    const [people, setPeople] = useState(null);
    const [url, setUrl] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [isLoading, setLoading] = useState(false);
   

    const [personalInfo, setPersonalInfo] = useState({
        height: 0,
        url: "",
        gender: "",
        weight: 0,
        age: 0,
        SK: "",
        PK: ""
    })

    useEffect(async () => {
        const response = await fetch(
            "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/profileIcon"
        );
        const data = await response.json();
        //setPersonalInfo(data.personalInfo);

        setPeople([
            { person: data[0], left: 38, top: 303 },
            { person: data[1], left: 145, top: 303 },
            { person: data[4], left: 252, top: 303 },
            { person: data[2], left: 38, top: 420 },
            { person: data[5], left: 145, top: 420 },
            { person: data[3], left: 252, top: 420 },

        ]);
        console.log(data);
    }, []);

    useEffect(async () => {
        const response = await fetch(
            "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/settingPage/userProfile/123"
        );
        const data = await response.json();
        setPersonalInfo(data.personalInfo);
    }, []);

    useEffect(() => {
        // POST request using axios inside useEffect React hook
        if (!url) return;
    }, [url]);
    

    async function postData() {
        if (isLoading || !gender || !age || !image) {
            // show some error
            return;
        }
        try {
            const id = await AsyncStorage.getItem("userID");
            console.log(id);
            const article = {
                userID: 123,
                gender: gender,
                age: age,
                weight: weight,
                height: height,
                url: image,
            };
            setLoading(true);
            const res = await axios.post(
                "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/personalInfo",
                article
            );
            navigation.navigate("EditProfile21");
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
            <Text style={styles.subheaderStyle}>Please enter or edit your personal information, so we can {'\n'}calculate your daily information for you!</Text>
            <Text style={styles.genderStyle}> Gender (male/female)</Text>
            <View style={styles.BoxStyle}> </View >
            <View style={styles.Box1Style}> </View >
            <View style={styles.Box2Style}> </View >
            <View style={styles.Box3Style}> </View >
            <View style={styles.Box4Style}> </View >
            <View style={styles.Box5Style}> </View >

            <TextInput style={styles.genderboxStyle}
                color='#FF5733'
                autoCapitalize='none'
                placeholder= {personalInfo.gender}
                placeholderTextColor='#FF5733'
                onChangeText={(value) => {
                    setGender(value);
                }}
            />
            <Text style={styles.ageStyle}> Age(year)</Text>
            <TextInput style={styles.ageboxStyle}
                color='#FF5733'
                autoCapitalize='none'
                placeholder= {personalInfo.age}
                placeholderTextColor='#FF5733'
                onChangeText={(value) => {
                    setAge(value);
                }}

            />
            <Text style={styles.weightStyle}> Weight(kg)</Text>
            <TextInput style={styles.weightboxStyle}
                color='#FF5733'
                autoCapitalize='none'
                placeholder= {personalInfo.weight}
                placeholderTextColor='#FF5733'
                onChangeText={(value) => {
                    setWeight(value);
                }}

            />
            <Text style={styles.heightStyle}> Height(cm)</Text>
            <TextInput style={styles.heightboxStyle}
                color='#FF5733'
                autoCapitalize='none'
                placeholder= {personalInfo.height}
                placeholderTextColor='#FF5733'
                onChangeText={(value) => {
                    setHeight(value);
                }}

            />
            <Text style={styles.iconStyle} >Select icon for your profile</Text>
            <TouchableOpacity
                disabled={isLoading}
                onPress={() => {
                    postData();
                }}
                style={styles.nextboxStyle}>
                <Text style={styles.nextStyle}>
                    {isLoading && <ActivityIndicator size="small" />}Next
                 </Text>
            </TouchableOpacity>
            {people &&
                people.map(({ person, left, top }) => {
                    return (
                        <div>
                            <TouchableOpacity
                                onPress={() => {
                                    setImage(person.url === image ? "" : person.url);
                                }}
                            >
                                <Image
                                  
                                    source={{ uri: person.url}}
                                    style={{
                                        width: 88,
                                        height: 101,
                                        left,
                                        top,
                                        position: "absolute",
                                        opacity: image && person.url === image ? 1 : 0.3,
                                    }}
                                />
                            </TouchableOpacity>
                        </div>
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
    BoxStyle: {
        color: '#FF5733',
        position: 'absolute',
        width: 85,
        height: 101,
        left: 38,
        top: 327,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
    },
    Box1Style: {
        color: '#FF5733',
        position: 'absolute',
        width: 85,
        height: 101,
        left: 145,
        top: 327,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
    },
    Box2Style: {
        color: '#FF5733',
        position: 'absolute',
        width: 85,
        height: 101,
        left: 252,
        top: 327,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
    },
    Box3Style: {
        color: '#FF5733',
        position: 'absolute',
        width: 85,
        height: 101,
        left: 38,
        top: 445,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
    },
    Box4Style: {
        color: '#FF5733',
        position: 'absolute',
        width: 85,
        height: 101,
        left: 145,
        top: 445,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
    },
    Box5Style: {
        color: '#FF5733',
        position: 'absolute',
        width: 85,
        height: 101,
        left: 252,
        top: 445,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
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
    genderStyle: {
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 93,
        textAlign: 'center'
    },
    genderboxStyle: {
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 107,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        fontSize: 10,
        padding: 7,
    },
    ageStyle: {
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 146,
        textAlign: 'center'
    },
    ageboxStyle: {
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 160,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        fontSize: 10,
        padding: 7,

    },
    weightStyle: {
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 199,
        textAlign: 'center'
    },
    weightboxStyle: {
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 213,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        fontSize: 10,
        padding: 7,
    },
    heightStyle: {
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 252,
        textAlign: 'center'
    },
    heightboxStyle: {
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 266,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        fontSize: 10,
        padding: 7,
    },
    iconStyle: {
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 304,
        textAlign: 'center'
    },
    nextboxStyle: {
        borderRadius: 24,
        width: 68,
        height: 24,
        left: 272,
        top: 569,
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


    subheaderStyle: {
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 56,
        textAlign: 'left'
    }






});


export default EditProfile2Screen;