import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { registerCustomIconType } from 'react-native-elements';
import Amplify, { Auth, API } from "aws-amplify";


const EditProfile22Screen = ({ navigation }) => {
    const [person, setPerson] = useState(null);
    const [theArray,setTheArray] = useState([]);
    const [alternateImage, setAlternateImage] = useState(true);
    const [alternateImage1, setAlternateImage1] = useState(true);
    const [alternateImage2, setAlternateImage2] = useState(true);
    const [alternateImage3, setAlternateImage3] = useState(true);
    const [alternateImage4, setAlternateImage4] = useState(true);
    const [alternateImage5, setAlternateImage5] = useState(true);
    const [alternateImage6, setAlternateImage6] = useState(true);
    const [alternateImage7, setAlternateImage7] = useState(true);
    const [alternateImage8, setAlternateImage8] = useState(true);
    const [url, setUrl] = useState("");
   

    const changeImage = () => { setAlternateImage(alternateImage => !alternateImage)}
    const changeImage1 = () => { setAlternateImage1(alternateImage1 => !alternateImage1)}
    const changeImage2 = () => {  setAlternateImage2(alternateImage2 => !alternateImage2)}
    const changeImage3 = () => {  setAlternateImage3(alternateImage3 => !alternateImage3)}
    const changeImage4 = () => { setAlternateImage4(alternateImage4 => !alternateImage4)}
    const changeImage5 = () => { setAlternateImage5(alternateImage5 => !alternateImage5)}
    const changeImage6 = () => {  setAlternateImage6(alternateImage6 => !alternateImage6)}
    const changeImage7 = () => {  setAlternateImage7(alternateImage7 => !alternateImage7)}
    const changeImage8 = () => {  setAlternateImage8(alternateImage8 => !alternateImage8)}

    useEffect(async ()=> {
        const userID = await Auth.currentAuthenticatedUser().user.attributes.sub;
        console.log(userID);

    });
    
   

    useEffect(async () => {
        const response = await fetch("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/cuisineOfMenu");
        const data = await response.json();
        setPerson(data);

    }, []);

    useEffect(() => {
        // POST request using axios inside useEffect React hook
        if (!url) return;

        async function postData() {
            const article = {
                userID: 123,
                profileOf: "nutidol",
                menuCuisine: theArray,
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


    console.log(theArray);
    return (
        <View>
            <Text style={styles.headerStyle}>Your personal information</Text>
            
            <Text style={styles.subheaderStyle}>Please select <b><u>"the cuisines"</u></b> you like. You can select{"\n"}more than one menu, the selection you made will be used to{"\n"}provide you the satisfying menus</Text>
            <TouchableOpacity onPress={() => {
                // navigation.navigate('EditProfile1');
                setUrl("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/cuisineOfMenu");
            }}
                style={styles.saveboxStyle}>
                <Text style={styles.saveStyle}>Save</Text>
            </TouchableOpacity>

            <View style={styles.BoxStyle}>   </View >

            <div> {person &&
                <TouchableOpacity
                    onPress={() => {
                        setTheArray([...theArray, person[0]]);
                        changeImage();
                        //setClicked(clicked+1);
                    }} >
                    {alternateImage && <Image source={{ uri: person[0].url }}
                        style={{ width: 84, height: 84, left: 47, top: 140, position: 'absolute', opacity: 1 }}
                    />}
                    {!alternateImage && <Image source={{ uri: person[0].url }}
                        style={{ width: 84, height: 84, left: 47, top: 140, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity 
                    onPress={() => {
                        changeImage1();
                        //setClicked1(clicked1+1);
                        setTheArray([...theArray, person[1]]);
                    }}>
                    {alternateImage1 && <Image source={{ uri: person[1].url }}
                        style={{ width: 84, height: 84, left: 143, top: 140, position: 'absolute', opacity: 1 }} />}
                    {!alternateImage1 && <Image source={{ uri: person[1].url }}
                        style={{ width: 84, height: 84, left: 143, top: 140, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                <TouchableOpacity 
                    onPress={() => {
                        changeImage2();
                        //setClicked1(clicked1+1);
                        setTheArray([...theArray, person[2]]);
                    }}>
                    {alternateImage2 && <Image source={{ uri: person[2].url }}
                        style={{ width: 84, height: 84, left: 239, top: 140, position: 'absolute', opacity: 1 }} />}
                    {!alternateImage2 && <Image source={{ uri: person[2].url }}
                        style={{ width: 84, height: 84, left: 239, top: 140, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity>}
            </div>

            <div> {person &&
                 <TouchableOpacity 
                 onPress={() => {
                     changeImage3();
                     //setClicked1(clicked1+1);
                     setTheArray([...theArray, person[3]]);
                 }}>
                    {alternateImage3 &&  <Image source={{ uri: person[3].url }}
                        style={{ width: 84, height: 84, left: 47, top: 240, position: 'absolute', opacity: 1 }} />}
                    {!alternateImage3 && <Image source={{ uri: person[3].url }}
                        style={{ width: 84, height: 84, left: 47, top: 240, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity> }
            </div>

            <div> {person &&
                 <TouchableOpacity 
                 onPress={() => {
                     changeImage4();
                     //setClicked1(clicked1+1);
                     setTheArray([...theArray, person[4]]);
                 }}>
                    {alternateImage4 &&  <Image source={{ uri: person[4].url }}
                        style={{ width: 84, height: 84, left: 143, top: 240, position: 'absolute', opacity: 1 }} />}
                    {!alternateImage4 && <Image source={{ uri: person[4].url }}
                        style={{ width: 84, height: 84, left: 143, top: 240, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity> }
            </div>

            <div> {person &&
                <TouchableOpacity 
                onPress={() => {
                    changeImage5();
                    //setClicked1(clicked1+1);
                    setTheArray([...theArray, person[5]]);
                }}>
                    {alternateImage5 &&  <Image source={{ uri: person[5].url }}
                        style={{ width: 84, height: 84, left: 239, top: 240, position: 'absolute', opacity: 1 }} />}
                    {!alternateImage5 && <Image source={{ uri: person[5].url }}
                        style={{ width: 84, height: 84, left: 239, top: 240, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity> }
            </div>

            <div> {person &&
                 <TouchableOpacity 
                 onPress={() => {
                     changeImage6();
                     //setClicked1(clicked1+1);
                     setTheArray([...theArray, person[6]]);
                 }}>
                    {alternateImage6 &&  <Image source={{ uri: person[6].url }}
                        style={{ width: 84, height: 84, left: 47, top: 340, position: 'absolute', opacity: 1 }} />}
                    {!alternateImage6 && <Image source={{ uri: person[6].url }}
                        style={{ width: 84, height: 84, left: 47, top: 340, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity> }
            </div>

            <div> {person &&
                 <TouchableOpacity 
                 onPress={() => {
                     changeImage7();
                     //setClicked1(clicked1+1);
                     setTheArray([...theArray, person[7]]);
                 }}>
                    {alternateImage7 &&  <Image source={{ uri: person[7].url }}
                        style={{ width: 84, height: 84, left: 143, top: 340, position: 'absolute', opacity: 1 }} />}
                    {!alternateImage7 && <Image source={{ uri: person[7].url }}
                        style={{ width: 84, height: 84, left: 143, top: 340, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity> }
            </div>

            <div> {person &&
                 <TouchableOpacity 
                 onPress={() => {
                     changeImage8();
                     //setClicked1(clicked1+1);
                     setTheArray([...theArray, person[8]]);
                 }}>
                    {alternateImage8 &&  <Image source={{ uri: person[8].url }}
                        style={{ width: 84, height: 84, left: 239, top: 340, position: 'absolute', opacity: 1 }} />}
                    {!alternateImage8 && <Image source={{ uri: person[8].url }}
                        style={{ width: 84, height: 84, left: 239, top: 340, position: 'absolute', opacity: 0.3 }} />}
                </TouchableOpacity> }
            </div> 

        </View>

    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        left: 36,
        top: 30,
        color: '#FF5733',
    },
    subheaderStyle: {
        position: 'absolute',
        fontSize: 10,
        left: 36,
        top: 56,
        color: '#FF5733',
    },
    saveboxStyle: {
        width: 68,
        height: 24,
        backgroundColor: '#FF5733',
        position: 'absolute',
        left: 267,
        top: 632,
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    saveStyle: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center'
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


export default EditProfile22Screen;