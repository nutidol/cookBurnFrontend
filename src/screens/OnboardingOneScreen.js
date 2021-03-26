import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import axios from 'axios'
import Amplify, { Auth, API } from "aws-amplify";
import ConfirmSignUp from "./ConfirmSignUp";
import Cookie from 'react-native-cookie';



const OnboardingOneScreen = ({ navigation }) => {
    const [posts, setPosts] = useState([])
    const [image, setImage] = useState("");
    const [person, setPerson] = useState(null);
    const [theArray, setTheArray] = useState([]);
    const [alternateImage, setAlternateImage] = useState(true);
    const [alternateImage1, setAlternateImage1] = useState(true);
    const [alternateImage2, setAlternateImage2] = useState(true);
    const [alternateImage3, setAlternateImage3] = useState(true);
    const [alternateImage4, setAlternateImage4] = useState(true);
    const [alternateImage5, setAlternateImage5] = useState(true);
    const [url, setUrl] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const changeImage = () => { setAlternateImage(alternateImage => !alternateImage) }

    const changeImage2 = () => { setAlternateImage2(alternateImage2 => !alternateImage2) }
    const changeImage3 = () => { setAlternateImage3(alternateImage3 => !alternateImage3) }
    const changeImage4 = () => { setAlternateImage4(alternateImage4 => !alternateImage4) }
    const changeImage5 = () => { setAlternateImage5(alternateImage5 => !alternateImage5) }

    useEffect(async () => {
        const response = await fetch("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/profileIcon");
        const data = await response.json();
        setPerson(data);
        console.log(data);
    }, []);

    useEffect(() => {
        // POST request using axios inside useEffect React hook
        if (!url) return;

        async function postData() {
            try{
                const id = Cookie.get(userID)
                console.log(id)
            }catch(error){
                console.log(error);
            }
            const article = {
                
                    userID: id ,
                    userName: "",
                    profileOf: "",
                    gender: gender,
                    age: age,
                    weight: weight,
                    height: height,
                    url: "https://cookburn-profilepics.s3-ap-southeast-1.amazonaws.com/girl.png"
                

            };

            console.log(article)

            const res = await axios.post(url, article,)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        postData();

    }, [url]);



    return (
        <View>

            <Text style={styles.personalStyle}> Please enter your {"\n"}personal information</Text>
            <Text style={styles.genderStyle}> Gender (male/female)</Text>
            <TextInput style={styles.genderboxStyle}
                color='#FF5733'
                autoCapitalize='none'
                placeholder='gender'
                placeholderTextColor='#FF5733'
                onChangeText={(value) => {
                    setGender(value)
                }}
            />
            <Text style={styles.ageStyle}> Age(year)</Text>
            <TextInput style={styles.ageboxStyle}
                color='#FF5733'
                autoCapitalize='none'
                placeholder='age'
                placeholderTextColor='#FF5733'
                onChangeText={(value) => {
                    setAge(value)
                }}

            />
            <Text style={styles.weightStyle}> Weight(kg)</Text>
            <TextInput style={styles.weightboxStyle}
                color='#FF5733'
                autoCapitalize='none'
                placeholder='weight'
                placeholderTextColor='#FF5733'
                onChangeText={(value) => {
                    setWeight(value)
                }}

            />
            <Text style={styles.heightStyle}> Height(cm)</Text>
            <TextInput style={styles.heightboxStyle}
                color='#FF5733'
                autoCapitalize='none'
                placeholder='height'
                placeholderTextColor='#FF5733'
                onChangeText={(value) => {
                    setHeight(value)
                }}

            />
            <Text style={styles.iconStyle} >Select icon for your profile</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}
                style={styles.skipboxStyle} >
                <Text style={styles.skipStyle} >Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                //navigation.navigate('OnBoarding2')
                setUrl("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/personalInfo");
            }}
                style={styles.nextboxStyle} >
                <Text style={styles.nextStyle}> Next</Text>
            </TouchableOpacity>

            <Text style={styles.point1Style}> . </Text>
            <Text style={styles.point2Style}> . </Text>
            <Text style={styles.point3Style}> . </Text>


            <View style={styles.iconBox1Style}>   </View >
            <View style={styles.iconBox2Style}> </View >
            <View style={styles.iconBox3Style}> </View >
            <View style={styles.iconBox4Style}>   </View >
            <View style={styles.iconBox5Style}> </View >
            <View style={styles.iconBox6Style}> </View >

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        //setTheArray([...theArray, person[0]]);
                        setImage(person[0].url)
                        clicking()
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage && <Image source={{ uri: person[0].url }}
                        style={{ width: 88, height: 101, left: 38, top: 310, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage && <Image source={{ uri: person[0].url }}
                        style={{ width: 88, height: 101, left: 38, top: 310, position: 'absolute', opacity: 0.3 }} />}

                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        //setTheArray([...theArray, person[1]]);
                        setImage(person[1].url)
                        clicking()
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage && <Image source={{ uri: person[1].url }}
                        style={{ width: 88, height: 101, left: 145, top: 310, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage && <Image source={{ uri: person[1].url }}
                        style={{ width: 88, height: 101, left: 145, top: 310, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        //setTheArray([...theArray, person[4]]);
                        changeImage4();
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage4 && <Image source={{ uri: person[4].url }}
                        style={{ width: 88, height: 101, left: 252, top: 310, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage4 && <Image source={{ uri: person[4].url }}
                        style={{ width: 88, height: 101, left: 252, top: 310, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        // setTheArray([...theArray, person[2]]);
                        changeImage2();
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage2 && <Image source={{ uri: person[2].url }}
                        style={{ width: 88, height: 101, left: 38, top: 430, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage2 && <Image source={{ uri: person[2].url }}
                        style={{ width: 88, height: 101, left: 38, top: 430, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        //setTheArray([...theArray, person[5]]);
                        changeImage5();
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage5 && <Image source={{ uri: person[5].url }}
                        style={{ width: 88, height: 101, left: 145, top: 430, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage5 && <Image source={{ uri: person[5].url }}
                        style={{ width: 88, height: 101, left: 145, top: 430, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        //setTheArray([...theArray, person[3]]);
                        changeImage3();
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage3 && <Image source={{ uri: person[3].url }}
                        style={{ width: 88, height: 101, left: 252, top: 430, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage3 && <Image source={{ uri: person[3].url }}
                        style={{ width: 88, height: 101, left: 252, top: 430, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

        </View>


    );
};




const styles = StyleSheet.create({
    personalStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 39,
        top: 50,
        textAlign: 'center',
    },
    genderStyle: {
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 115,
        textAlign: 'center'
    },
    genderboxStyle: {
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 129,
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
        top: 168,
        textAlign: 'center'
    },
    ageboxStyle: {
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 182,
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
        top: 221,
        textAlign: 'center'
    },
    weightboxStyle: {
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 235,
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
        top: 274,
        textAlign: 'center'
    },
    heightboxStyle: {
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 288,
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
        top: 326,
        textAlign: 'center'
    },
    skipboxStyle: {
        width: 120,
        height: 37,
        backgroundColor: 'white',
        position: 'absolute',
        left: 45,
        top: 725,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#FF5733',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    nextboxStyle: {
        borderRadius: 24,
        width: 120,
        height: 37,
        left: 210,
        top: 725,
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
    skipStyle: {
        fontSize: 10,
        color: '#FF5733',
        textAlign: 'center'
    },

    point1Style: {
        fontSize: 40,
        fontWeight: '700',
        color: '#FF5733',
        position: 'absolute',
        left: 168.5,
        top: 670,

    },
    point2Style: {
        fontSize: 40,
        fontWeight: '700',
        color: '#FF910D',
        position: 'absolute',
        left: 184.5,
        top: 670,
    },
    point3Style: {
        fontSize: 40,
        fontWeight: '700',
        color: '#FF910D',
        position: 'absolute',
        left: 200.5,
        top: 670,
    },
    iconBox1Style: {
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
        position: 'absolute',
        borderColor: '#FF5733',
        left: 37,
        top: 349
    },
    iconBox2Style: {
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        position: 'absolute',
        left: 144,
        top: 349
    },
    iconBox3Style: {
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        position: 'absolute',
        left: 251,
        top: 349
    },
    iconBox4Style: {
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        position: 'absolute',
        left: 37,
        top: 470
    },
    iconBox5Style: {
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        position: 'absolute',
        left: 144,
        top: 470
    },
    iconBox6Style: {
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        position: 'absolute',
        left: 251,
        top: 470
    }







});

export default OnboardingOneScreen;