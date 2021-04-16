import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";


const AddProfileScreen = ({ navigation }) => {
    const [pic, setPic] = useState([]);
    const [top, setTop] = useState([]);

    useEffect(async () => {
        const id = await AsyncStorage.getItem("userID");
        const response = await fetch("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/settingPage/getOtherProfiles/123");
        // const response = await fetch( `https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/settingPage/getOtherProfiles/${id}`);
        const data = await response.json();
        addDataToArray(data);
        console.log(data)
    }, []);

    console.log(top);

    const addDataToArray = (data) => {
        var array = [];
        var positionImageTop = -50;
        var positionNameTop = 60;

        for (var i in data) {
            if (i % 2 === 0) {
                positionImageTop += 157;
                positionNameTop += 157;
                var positionImageLeft = 85;
                var positionNameLeft = 107
            } else if (i % 2 === 1) {
                positionImageLeft += 160;
                positionNameLeft += 160;

            }
            var dataWithPosition = { profile: data[i].profile, url: data[i].url, topImage: positionImageTop, leftImage: positionImageLeft, leftName: positionNameLeft, topName: positionNameTop };
            array.push(dataWithPosition);
        }
        setTop(positionNameTop);
        console.log(array);
        setPic(array);
    }

    return (
        <View>
            <Text style={styles.header1Style}>Add Other's Profile</Text>
            <Text style={styles.textStyle}> Please add others's personal information, so we can calculate{'\n'} their daily intake information for you!</Text>


            {pic && pic.map(({ url, leftImage, topImage, profile, topName, leftName }) => {
                return (
                    <TouchableOpacity
                        key={profile}>
                        <Image
                            source={url}
                            style={{
                                width: 70,
                                height: 125,
                                left: leftImage,
                                top: topImage,
                                position: 'absolute',
                            }}
                        />
                        <Text style={{
                            left: leftName,
                            top: topName,
                            color: '#FF5733',
                            fontSize: 10,
                            position: 'absolute',
                        }}>{profile}</Text>


                    </TouchableOpacity>



                );
            })}
            <TouchableOpacity
             onPress={() => {
                navigation.navigate("AddProfile1");
             
      
              }}
                style={{ width: 100,
                    height: 30,
                    backgroundColor: "#FF5733",
                    position: "absolute",
                    left: 240,
                    top: top+30,
                    borderRadius: 24,
                    borderWidth: 1,
                    borderColor: "#FF5733",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingHorizontal: 10,}}
               >
                <Text style={styles.addStyle}>Add</Text>
            </TouchableOpacity>
        </View>
    )

};

const styles = StyleSheet.create({
    header1Style: {
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 30
    },
    textStyle: {
        fontSize: 10,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "left",
        left: 36,
        top: 56
    },
    addStyle: {
        width: 126,
        height: 143,
        left: 211,
        top: 150,
        borderRadius: 27,
        borderWidth: 1,
        borderColor: '#FF5733'

    },
    addStyle: {
        fontSize: 10,
        color: "white",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
      },
     




});


export default AddProfileScreen;
