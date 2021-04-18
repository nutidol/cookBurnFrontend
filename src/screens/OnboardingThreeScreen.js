import React, { useState, useEffect } from "react";
import {View,Text,StyleSheet,Image, TouchableOpacity,TextInput, ActivityIndicator} from 'react-native';
import axios from "axios";
import Amplify, { Auth, API } from "aws-amplify";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnboardingThreeScreen = ({ navigation }) => {
    const [image, setImage] = useState([]);
    const [people, setPeople] = useState(null);
    const [url, setUrl] = useState("");
    const [isLoading, setLoading] = useState(false);
    const[selectedImages, setSelectedImages] = useState([]);

    const isSelected = (image) => {
        for (var i  in selectedImages){
            if(selectedImages[i].url === image)
                return true;
        } 
        return false;
    }
   
    const removeFromSelectedImages = (image) =>{
        var newSelected = [];
        for (var i  in selectedImages){
            if(selectedImages[i].url !== image)
                newSelected.push(selectedImages[i]);
        }  
        setSelectedImages(newSelected);
       
    }
    console.log(selectedImages);

    

    useEffect(async () => {
        const response = await fetch(
            "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/cuisineOfMenu"
        );
        const data = await response.json();
        setPeople([
            { person: data[0], left: 47, top: 200 },
            { person: data[1], left: 143, top: 200 },
            { person: data[2], left: 239, top: 200 },
            { person: data[3], left: 47, top: 300 },
            { person: data[4], left: 143, top: 300 },
            { person: data[5], left: 239, top: 300 },
            { person: data[6], left: 47, top: 400 },
            { person: data[7], left: 143, top: 400 },
            { person: data[8], left: 239, top: 400 },
            { person: data[9], left: 47, top: 500 },
            { person: data[10], left: 143, top: 500 },
            { person: data[11], left: 239, top: 500 },

        ]);
    }, []);



    useEffect(() => {
        if (!url) return;
    }, [url]);


    async function postData() {
        if (isLoading) {
            return;
        }
        try {
            const id = await AsyncStorage.getItem("userID");
            console.log(id);

            const article = {
                userID: id,
                profileOf: "",
                menuCuisine: selectedImages
            };
            setLoading(true);
            const res = await axios.post(
                "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/cuisineOfMenu",
                article
            );
            console.log(article);
            navigation.navigate("Home1");
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <View>
            <Text style={styles.textOneStyle}>Please select <u>the cuisines</u> of {"\n"}menu you like</Text>
            <Text style={styles.textTwoStyle}> You can select more than one menu, the{"\n"}selection you made will be used to provide you{"\n"}the satisfying menus</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Home1')}
                style={styles.skipboxStyle} >
                <Text style={styles.skipStyle} >Skip</Text>
            </TouchableOpacity>

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
            <Text style={styles.point1Style}> . </Text>
            <Text style={styles.point2Style}> . </Text>
            <Text style={styles.point3Style}> . </Text>
            <View style={styles.BoxStyle}>   </View >

            {people && people.map(({ person, left, top}) => {
                return (
    
                        <TouchableOpacity
                            key={person.SK}
                            onPress={() => {
                                if(isSelected(person.url)){
                                    removeFromSelectedImages(person.url);
                                }else{
                                    setSelectedImages([...selectedImages,person])
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


    );
};
const styles = StyleSheet.create({
    textOneStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        left: 39,
         top: 50,
         color: '#FF5733',
     },
     textTwoStyle:{
         position: 'absolute',
         fontSize: 12,
         left: 39.5,
         top: 100,
         color: '#FF5733',
     },
     nextboxStyle:{
         width: 120,
         height: 37,
         backgroundColor: '#FF5733',
         position:'absolute',
         left: 210,
         top: 725,
         borderRadius: 24,
         display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10 
     },
     nextStyle:{
         fontSize: 10,
         color: 'white',
         textAlign: 'center'
     },
     point1Style:{
        fontSize: 40,
        fontWeight: '700',
        color: '#FF910D',
        position:'absolute',
        left: 168.5,
        top: 670,

    },
    point2Style:{
        fontSize: 40,
        fontWeight: '700',
        color: '#FF910D',
        position:'absolute',
        left: 184.5,
        top: 670,
    },
    point3Style:{
        fontSize: 40,
        fontWeight: '700',
        color: '#FF5733',
        position:'absolute',
        left: 200.5,
        top: 670,
    },
    BoxStyle:{
        width: 303,
        height: 494,
        borderRadius: 20,
        borderWidth: 1,
       borderColor: '#FF5733',
       position:'absolute',
       left: 35,
       top: 177
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
    skipStyle: {
        fontSize: 10,
        color: '#FF5733',
        textAlign: 'center'
    }
   
});

export default OnboardingThreeScreen;