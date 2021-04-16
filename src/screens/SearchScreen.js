import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, Image, } from 'react-native';
import axios from "axios";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import SwitchSelector from "react-native-switch-selector";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SearchScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [pic, setPic] = useState([]);
  const [duration, setDuration] = useState("")
  const [energy, setEnergy] = useState("")
  const [fat, setFat] = useState("")
  const [carb, setCarb] = useState("")
  const [sugar, setSugar] = useState("")
  const [protein, setProtein] = useState("")
  const [sodium, setSodium] = useState("")
  const [fiber, setFiber] = useState("")
  const [servingSize, setServingSize] = useState("")
  const [selectedProfile, setSelectedProfile] = useState([]);
  const [top, setTop] = useState("");

  var dataWithPosition = {}

  const isSelected = () => {
    for (var i in selectedProfile) {
      if (selectedProfile === profile)
        return true;
    }

    return false;
  }


  const removeFromSelectedImages = () => {
    var newSelected = [];
    for (var i in selectedProfile) {
      if (selectedProfile !== profile)
        newSelected.push(selectedProfile[i]);
    }
    setSelectedProfile(newSelected);
  }

  console.log(selectedProfile);


  useEffect(async () => {
    const id = await AsyncStorage.getItem("userID");
    const response = await fetch(
      "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/menuPage/menuFilterFor/123"
    );
    const data = await response.json();
    addDataToArray(data);



  }, []);

  const addDataToArray = (data) => {
    var array = [];
    var positionImageTop = -44;
    var positionNameTop = 52;


    for (var i in data) {

      if (i % 3 === 0) {
        positionImageTop += 114;
        positionNameTop += 114;
        var positionImageLeft = 37;
        var positionNameLeft = 64
      }
      else if (i % 3 === 1) {
        positionImageLeft += 107;
        positionNameLeft += 107;
      }
      else if (i % 3 == 2) {
        positionImageLeft += 107;
        positionNameLeft += 107;

      }
      dataWithPosition = { url: data[i].url, leftImage: positionImageLeft, topImage: positionImageTop, leftName: positionNameLeft, topName: positionNameTop, profile: data[i].profile }
      array.push(dataWithPosition)

    }
    setTop(positionNameTop);

    setPic(array)
    console.log(array)
  }


  async function postData() {

    try {
      const id = await AsyncStorage.getItem("userID");
      const timestamp = Date.now();
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
        genBy: {
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
      navigation.navigate("Search1");
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView>
      <Text style={styles.headerStyle}>Menu Filters</Text>
      <Text style={styles.forStyle}>For</Text>
      <Text style={styles.subforStyle}>(You can select more than 1 person)</Text>
      <Text style={{ fontSize: 15, color: "#FF5733", position: 'absolute', textAlign: "center", fontWeight: "bold", left: 36, top: top + 50 }}>By</Text>
      <Text style={{ color: "#FF5733", fontSize: 10, left: 60, top: top + 52, position: 'absolute', }}>(Please select the following constraints whether to maximize, minimize, 0 (zero value), - (default value))</Text>
      <TouchableOpacity style={styles.profilePicStyle}> </TouchableOpacity>
      <View style={{ borderBottomColor: '#FF910D', borderBottomWidth: 1, top: top + 32 }} />

      <View style={{ width: 302, height: 31, position: 'absolute', left: 37, top: top + 95, backgroundColor: '#FDCD94', zIndex: 1 }}>
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

      <View style={{
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: top + 126,
        backgroundColor: '#EAE8E8',
        zIndex: 1,
      }}>
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
      <View style={{
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: top + 157,
        backgroundColor: '#FDCD94',
        zIndex: 1
      }}>
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
      <View style={{
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: top + 188,
        backgroundColor: '#EAE8E8',
        zIndex: 1,
      }}>
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
      <View style={{
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: top + 219,
        backgroundColor: '#FDCD94',
        zIndex: 1
      }}>
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
      <View style={{
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: top + 250,
        backgroundColor: '#EAE8E8',
        zIndex: 1,
      }}>
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
      <View style={{
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: top + 281,
        backgroundColor: '#FDCD94',
        zIndex: 1
      }}>
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
        width: 302,
        height: 31,
        position: 'absolute',
        left: 37,
        top: top + 312,
        backgroundColor: '#EAE8E8',
        zIndex: 1
      }}>
        <Text style={styles.textStyle}>Fiber(g)</Text>
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
          onPress={value => setFiber(value)}
        />

      </View>


      <View style={{
        borderBottomColor: '#FF910D',
        borderBottomWidth: 1,
        top: top + 370
      }} />
      <TouchableOpacity
        style={{
          width: 100,
          height: 30,
          backgroundColor: "#FF5733",
          position: "absolute",
          left: 240,
          top: top + 450,
          borderRadius: 24,
          borderWidth: 1,
          borderColor: "#FF5733",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
        onPress={() => postData()}>
        <Text style={styles.generateStyle}>{isLoading && <ActivityIndicator size="small" />}Generate</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 15,color: "#FF5733",position: 'absolute', textAlign: "center", fontWeight: "bold",left: 44,top: top + 388}}>Serving Size</Text>
      <TextInput style={{
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        height: 30,
        width: 64,
        position: 'absolute',
        left: 168,
        top: top + 388,
        color: '#FF5733',
        fontSize: 10,
        textAlign: 'center'
      }}
        color='#FF5733'
        textAlign='center'
        defaultValue={1}
        onChangeText={newTerm => setServingSize(newTerm)} />


      {pic && pic.map(({ url, leftImage, topImage, leftName, topName, profile }) => {
        return (
          <TouchableOpacity
            key={profile}
            onPress={() => {
              if (isSelected(profile)) {
                removeFromSelectedImages(profile);
              } else {
                setSelectedProfile([...selectedProfile, profile])
              }
            }}>
            <Image
              source={url}
              style={{
                width: 88,
                height: 101,
                left: leftImage,
                top: topImage,
                position: 'absolute',
                opacity: isSelected(profile) ? 1 : 0.3,
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




    </ScrollView>
  );
};

const styles = StyleSheet.create({

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


  generateStyle: {
    fontSize: 10,
    color: "white",
    position: 'absolute',
    textAlign: "center",
    fontWeight: "bold",
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