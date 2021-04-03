import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ActivityIndicator } from 'react-native';
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile22Screen = ({ navigation }) => {
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
            { person: data[0], left: 47, top: 120 },
            { person: data[1], left: 143, top: 120 },
            { person: data[2], left: 239, top: 120 },
            { person: data[3], left: 47, top: 220 },
            { person: data[4], left: 143, top: 220 },
            { person: data[5], left: 239, top: 220 },
            { person: data[6], left: 47, top: 320 },
            { person: data[7], left: 143, top: 320 },
            { person: data[8], left: 239, top: 320 },

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
                menuCuisine: selectedImages
            };
            setLoading(true);
            const res = await axios.post(
                "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/cuisineOfMenu",
                article
            );
            console.log(article);
            navigation.navigate("EditProfile1");
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <View>
            <Text style={styles.headerStyle}>Your personal information</Text>
            
            <Text style={styles.subheaderStyle}>Please select <b><u>the cuisines</u></b> you like. You can select{"\n"}more than one menu, the selection you made will be used to{"\n"}provide you the satisfying menus</Text>
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

            <View style={styles.BoxStyle}></View >

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


});


export default EditProfile22Screen;