import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import axios from 'axios'

const EditProfile2Screen = ({ navigation }) => {
    const [person, setPerson] = useState(null)
    const [theArray, setTheArray] = useState([]);
    const [alternateImage, setAlternateImage] = useState(true);
    const [alternateImage1, setAlternateImage1] = useState(true);
    const [alternateImage2, setAlternateImage2] = useState(true);
    const [alternateImage3, setAlternateImage3] = useState(true);
    const [alternateImage4, setAlternateImage4] = useState(true);
    const [alternateImage5, setAlternateImage5] = useState(true);
    const [url, setUrl] = useState("");

    const changeImage = () => { setAlternateImage(alternateImage => !alternateImage) }
    const changeImage1 = () => { setAlternateImage1(alternateImage1 => !alternateImage1) }
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
            const article = {
                userID: 123,
                profileOf: "nutidol",
                theArray
            };

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
                placeholder='gender'
                placeholderTextColor='#FF5733'
            />
            <Text style={styles.ageStyle}> Age(year)</Text>
            <TextInput style={styles.ageboxStyle}
                color='#FF5733'
                autoCapitalize='none'
                placeholder='age'
                placeholderTextColor='#FF5733'

            />
            <Text style={styles.weightStyle}> Weight(kg)</Text>
            <TextInput style={styles.weightboxStyle}
                color='#FF5733'
                autoCapitalize='none'
                placeholder='weight'
                placeholderTextColor='#FF5733'

            />
            <Text style={styles.heightStyle}> Height(cm)</Text>
            <TextInput style={styles.heightboxStyle}
                color='#FF5733'
                autoCapitalize='none'
                placeholder='height'
                placeholderTextColor='#FF5733'

            />
            <Text style={styles.iconStyle} >Select icon for your profile</Text>
            <TouchableOpacity onPress={() =>{
                navigation.navigate('EditProfile21')
                setUrl("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/profileIcon");
            }
                 }
                style={styles.nextboxStyle} >
                <Text style={styles.nextStyle}> Next</Text>
            </TouchableOpacity>

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        setTheArray([...theArray, person[0]]);
                        changeImage();
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage && <Image source={{ uri: person[0].url }}
                        style={{ width: 88, height: 101, left: 38, top: 305, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage && <Image source={{ uri: person[0].url }}
                        style={{ width: 88, height: 101, left: 38, top: 305, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        setTheArray([...theArray, person[1]]);
                        changeImage1();
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage1 && <Image source={{ uri: person[1].url }}
                        style={{ width: 88, height: 101, left: 145, top: 305, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage1 && <Image source={{ uri: person[1].url }}
                        style={{ width: 88, height: 101, left: 145, top: 305, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        setTheArray([...theArray, person[4]]);
                        changeImage4();
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage4 && <Image source={{ uri: person[4].url }}
                        style={{ width: 88, height: 101, left: 252, top: 305, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage4 && <Image source={{ uri: person[4].url }}
                        style={{ width: 88, height: 101, left: 252, top: 305, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        setTheArray([...theArray, person[2]]);
                        changeImage2();
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage2 && <Image source={{ uri: person[2].url }}
                        style={{ width: 88, height: 101, left: 38, top: 422, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage2 && <Image source={{ uri: person[2].url }}
                        style={{ width: 88, height: 101, left: 38, top: 422, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        setTheArray([...theArray, person[5]]);
                        changeImage5();
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage5 && <Image source={{ uri: person[5].url }}
                        style={{ width: 88, height: 101, left: 145, top: 422, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage5 && <Image source={{ uri: person[5].url }}
                        style={{ width: 88, height: 101, left: 145, top: 422, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        setTheArray([...theArray, person[3]]);
                        changeImage3();
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage3 && <Image source={{ uri: person[3].url }}
                        style={{ width: 88, height: 101, left: 252, top: 422, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage3 && <Image source={{ uri: person[3].url }}
                        style={{ width: 88, height: 101, left: 252, top: 422, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

        </View>

    )

};

const styles = StyleSheet.create({
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