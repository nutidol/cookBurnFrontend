import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, Image, } from 'react-native';
import axios from "axios";
import { TextInput } from 'react-native-gesture-handler';
import SwitchSelector from "react-native-switch-selector";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SearchScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [pic, setPic] = useState([]);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("")
  const [energy, setEnergy] = useState("")

  const[ fat, setFat] = useState("")
  const[ carb, setCarb] = useState("")
  const[ sugar, setSugar] = useState("")
  const[ protein, setProtein] = useState("")
  const[ sodium, setSodium] = useState("")
  const [servingSize, setServingSize] = useState("")
  //const [isLoading, setLoading] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState([]);

  //console.log(energy);
  //console.log(pic)


  const isSelected = (image) => {
    for (var i in selectedProfile) {
      if (selectedProfile === name.profile)
        return true;
    }
    return false;
  }

  const removeFromSelectedImages = () => {
    var newSelected = [];
    for (var i in selectedProfile) {
      if (selectedProfile !== name.profile)
        newSelected.push(selectedProfile[i]);
    }
    setSelectedProfile(newSelected);
  }
  //console.log(selectedProfile);

  useEffect(async () => {
    const id = await AsyncStorage.getItem("userID");
    const response = await fetch(
      "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/menuPage/menuFilterFor/123"
    );
    const data = await response.json();
    setName([
      { profileName: data[0].profile, left: 74, top: 155 },
      { profileName: data[1].profile, left: 170, top: 155 },
      { profileName: data[2].profile, left: 266, top: 155 },
    ])
    addDataToArray(data);

  }, []);

  const addDataToArray = (data) => {
    var array = [];
    var positionLeft = 0;

    for (var i in data) {
      var positionTop = 70;

      if (i == 0) {
        positionLeft = 47

      }
      else if (i == 1) {
        positionLeft = 143
      }
      else if (i == 2) {
        positionLeft = 239
      }
      var dataWithPosition = { url: data[i].url, top: positionTop, left: positionLeft }
      array.push(dataWithPosition)
    }

    setPic(array)
    console.log(array)
  }


  async function postData() {

    try {
        const id = await AsyncStorage.getItem("userID");
        const timestamp =  Date.now(); 
        console.log(id);
        console.log(timestamp)
        const article = {
          userID: "123",
          timestamp: timestamp,
          genFor: [
              {
                  "profile": "mama",
                  "url": "https://cookburn-profilepics.s3-ap-southeast-1.amazonaws.com/girl.png"
              },
              {
                  "profile": "nutidol",
                  "url": "https://cookburn-profilepics.s3-ap-southeast-1.amazonaws.com/girl.png"
              }
          ],
          genBy:{
            duration: duration,
            energy: energy,
            fat: fat,
            carb: carb,
            sugar: sugar,
            protein: protein,
            sodium: sodium
          },
          servingSize: servingSize
      };
        setLoading(true);
        const res = await axios.post(
            "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/menuPage/menuFilter",
            article
        );
        navigation.navigate("Search1Screen");
        console.log(res);
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

  return (
    <View>
      <Text style={styles.headerStyle}>Menu Filters</Text>
      <Text style={styles.forStyle}>For</Text>
      <Text style={styles.subforStyle}>(You can select more than 1 person)</Text>
      <Text style={styles.byStyle}>By</Text>
      <Text style={styles.descriptionStyle}>(Please select the following constraints whether to maximize, minimize, 0 (zero value), - (default value))</Text>
      <TouchableOpacity style={styles.profilePicStyle}> </TouchableOpacity>
      <View style={{
        borderBottomColor: '#FF910D',
        borderBottomWidth: 1,
        top: 190
      }} />
      <View style={styles.tableuStyle}>
        <Text style={styles.textStyle}>Duration(minutes)</Text>
        <SwitchSelector
          style={styles.switchStyle}
          initial={1}
          height={29}
          textColor='#FF5733'
          selectedColor='white'
          buttonColor='#FF5733'
          options={[
            { label: "max", value: "max" },
            { label: "-", value: "-" },
            { label: "min", value: "min" },
          ]}
          onPress={value => setDuration(value)}
        />
      </View>

      <View style={styles.tableu1Style}>
        <Text style={styles.textStyle}>Energy(kcal)</Text>
        <SwitchSelector
        style={styles.switchStyle}
          initial={1}
          height={29}
          textColor='#FF5733'
          selectedColor='white'
          buttonColor='#FF5733'
          borderColor='#FF5733'
          options={[
            { label: "max", value: "max" },
            { label: "-", value: "-" },
            { label: "min", value: "min" },
          ]}
          onPress={value => setEnergy(value)}
           /> 
      </View>
      <View style={styles.tableu2Style}>
        <Text style={styles.textStyle}>Total fat(g)</Text>
        <SwitchSelector
        style={styles.switchStyle}
          initial={1}
          height={29}
          textColor='#FF5733'
          selectedColor='white'
          buttonColor='#FF5733'
          borderColor='#FF5733'
          options={[
            { label: "max", value: "max" },
            { label: "0", value: "0" },
            { label: "min", value: "min" },
          ]}
          onPress={value => setFat(value)}
           /> 

      </View>
      <View style={styles.tableu3Style}>
        <Text style={styles.textStyle}>Carbohydrate(g)</Text>
        <SwitchSelector
        style={styles.switchStyle}
          initial={1}
          height={29}
          textColor='#FF5733'
          selectedColor='white'
          buttonColor='#FF5733'
          borderColor='#FF5733'
          options={[
            { label: "max", value: "max" },
            { label: "0", value: "0" },
            { label: "min", value: "min" },
          ]}
          onPress={value => setCarb(value)}
           /> 

      </View>
      <View style={styles.tableu4Style}>
        <Text style={styles.textStyle}>Sugar(g)</Text>
        <SwitchSelector
        style={styles.switchStyle}
          initial={1}
          height={29}
          textColor='#FF5733'
          selectedColor='white'
          buttonColor='#FF5733'
          borderColor='#FF5733'
          options={[
            { label: "max", value: "max" },
            { label: "0", value: "0" },
            { label: "min", value: "min" },
          ]}
          onPress={value => setSugar(value)}
           /> 

      </View>
      <View style={styles.tableu5Style}>
        <Text style={styles.textStyle}>Protein(g)</Text>
        <SwitchSelector
        style={styles.switchStyle}
          initial={1}
          height={29}
          textColor='#FF5733'
          selectedColor='white'
          buttonColor='#FF5733'
          borderColor='#FF5733'
          options={[
            { label: "max", value: "max" },
            { label: "0", value: "0" },
            { label: "min", value: "min" },
          ]}
          onPress={value => setProtein(value)}
           /> 

      </View>
      <View style={styles.tableu6Style}>
        <Text style={styles.textStyle}>Sodium(mg)</Text>
        <SwitchSelector
        style={styles.switchStyle}
          initial={1}
          height={29}
          textColor='#FF5733'
          selectedColor='white'
          buttonColor='#FF5733'
          borderColor='#FF5733'
          options={[
            { label: "max", value: "max" },
            { label: "0", value: "0" },
            { label: "min", value: "min" },
          ]}
          onPress={value => setSodium(value)}
           /> 

      </View>


      <View style={{
        borderBottomColor: '#FF910D',
        borderBottomWidth: 1,
        top: 490
      }} />
      <TouchableOpacity
        style={styles.generateBoxStyle}
        onPress={() => postData()}>
        <Text style={styles.generateStyle}> Generate</Text>
      </TouchableOpacity>

      <Text style={styles.servingStyle}>{isLoading && <ActivityIndicator size="small" />}Serving Size</Text>
      <TextInput style={styles.servingBoxStyle}
        color='#FF5733'
        textAlign='center'
        defaultValue={1} 
        onChangeText = {newTerm => setServingSize(newTerm)}/>


      {pic && pic.map(({ url, left, top }) => {
        return (

          <Image
            source={url}
            style={{
              width: 88,
              height: 101,
              left,
              top,
              position: 'absolute',
              //opacity: isSelected(pic.url) ? 1 : 0.3,

            }}
          />

        );
      })}


      {name && name.map(({ profileName, left, top }) => {
        return (

          <TouchableOpacity
            key={profileName.profile}
            onPress={() => {
              if (isSelected(profileName.profile)) {
                removeFromSelectedImages(profileName.profile);
              } else {
                setSelectedProfile([...selectedProfile, profileName.profile])
              }

            }}>
            <Text style={{ left, top, color: "#FF5733", fontSize: 10, fontWeight: "bold", position: 'absolute' }}>{profileName}</Text>
          </TouchableOpacity>

        );
      })}


    </View>
  );
};

const styles = StyleSheet.create({
  descriptionStyle:{
    color: "#FF5733",
    fontSize:10,
    left: 60,
    top: 214,
    position: 'absolute',
  },
  infoStyle: {
    color: "#FF5733",
    position: 'absolute',
    zIndex: 5,
    paddingLeft: 250,
    paddingVertical: 7
  },
  textStyle: {
    color: "#FF5733",
    position: 'absolute',
    padding: 7,
    fontSize: 15,
  },
  tableuStyle: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 250,
    backgroundColor: '#FDCD94',
    zIndex: 1
  },
  tableu1Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 281,
    backgroundColor: '#EAE8E8',
    zIndex: 1,
  },
  tableu2Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 312,
    backgroundColor: '#FDCD94',
    zIndex: 1
  },
  tableu3Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 343,
    backgroundColor: '#EAE8E8',
    zIndex: 1
  },
  tableu4Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 374,
    backgroundColor: '#FDCD94',
    zIndex: 1
  },
  tableu5Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 405,
    backgroundColor: '#EAE8E8',
    zIndex: 1
  },
  tableu6Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 436,
    backgroundColor: '#FDCD94',
    zIndex: 1
  },

  subforStyle: {
    fontSize: 10,
    color: "#FF5733",
    position: 'absolute',
    textAlign: "center",
    left: 71,
    top: 66
  },
  switchStyle: {
    width: 130,
    left: 173,

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
  forStyle: {
    fontSize: 15,
    color: "#FF5733",
    position: 'absolute',
    textAlign: "center",
    fontWeight: "bold",
    left: 36,
    top: 62
  },
  byStyle: {
    fontSize: 15,
    color: "#FF5733",
    position: 'absolute',
    textAlign: "center",
    fontWeight: "bold",
    left: 36,
    top: 210
  },

  generateStyle: {
    fontSize: 10,
    color: "white",
    position: 'absolute',
    textAlign: "center",
    fontWeight: "bold",
  },
  generateBoxStyle: {
    width: 100,
    height: 30,
    backgroundColor: "#FF5733",
    position: "absolute",
    left: 240,
    top: 590,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#FF5733",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },


  servingStyle: {
    fontSize: 15,
    color: "#FF5733",
    position: 'absolute',
    textAlign: "center",
    fontWeight: "bold",
    left: 44,
    top: 520

  },
  servingBoxStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5733',
    height: 30,
    width: 64,
    position: 'absolute',
    left: 168,
    top: 520,
    color: '#FF5733',
    fontSize: 10,
    textAlign: 'center'
  },
  optionStyle: {
    fontSize: 15,
    color: "#FF5733",
    position: 'absolute',
    textAlign: "center",
    left: 44,
    top: 377
  },

});


export default SearchScreen;