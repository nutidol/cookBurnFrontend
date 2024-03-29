import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from 'react-native-dropdown-picker';

const EditOthersProfileInfo = ({ navigation }) => {
 
  const [image, setImage] = useState("");
  const [people, setPeople] = useState(null);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
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


  async function setProfile(name) {
    try {
      await AsyncStorage.setItem("profileOf", name)

    } catch (error) {
      console.log(
        "Cannot set profile name",
        error
      );
      setInvalidMessage(error.message);
    }
  }

  useEffect(async () => {
    const response = await fetch(
      "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/onboardingPage/profileIcon"
    );
    const data = await response.json();

    setPeople([
      { person: data[0], left: 38, top: 355 },
      { person: data[1], left: 145, top: 355 },
      { person: data[4], left: 252, top: 355 },
      { person: data[2], left: 38, top: 477 },
      { person: data[5], left: 145, top: 477 },
      { person: data[3], left: 252, top: 477 },

    ]);
    console.log(data);
  }, []);

  useEffect(async () => {
    const id = await AsyncStorage.getItem("userID");
    const profileOf = await AsyncStorage.getItem("profileOf")
    const response1 = await fetch(
        `https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/settingPage/othersProfileDetails/${id}/${profileOf}`
    );
    const data1 = await response1.json();
    setPersonalInfo(data1.personalInfo);
}, []);

  useEffect(() => {
    if (!url) return;
  }, [url]);

  async function postData() {
    if (isLoading || !gender || !age || !image) {
      return;
    }
    try {
      const id = await AsyncStorage.getItem("userID");
      console.log(id);
      const article = {
        userID: id,
        profileOf: name,
        gender: gender,
        age: age,
        weight: weight,
        height: height,
        url: image,
      };
      setLoading(true);
      setProfile(name);
      const res = await axios.post(
        "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/settingPage/otherProfile",
        article
      );
     
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
          navigation.navigate("Other’s Profile Information")
        }}>
        <Text style={styles.backStyle}> &lt;&lt;back</Text>
      </TouchableOpacity>

      <Text style={styles.headerStyle}>Edit Other's Profile</Text>
      <Text style={styles.greetStyle}>Please edit your personal information, so we can {'\n'}calculate your daily information for you!</Text>
      <Text style={styles.nameStyle}> Name</Text>

      <TextInput style={styles.nameboxStyle}
      
        color='#FF5733'
        autoCapitalize='none'
        placeholder= {personalInfo.name}
        placeholderTextColor='#FF5733'
        onChangeText={(value) => {
          setName(value);
        }}
      />

      <DropDownPicker
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
        defaultIndex={0}
        arrowColor="#FF5733"
        placeholder="gender"
        containerStyle={{ height: 30, width: 302, top: 160, left: 36.75, position: 'absolute' ,  backgroundColor: 'white', borderRadius: 8, borderWidth: 1,  borderColor: '#FF5733'}}
  
        labelStyle={{
          fontSize: 10,
          textAlign: 'left',
          color: "#FF5733" ,
      }}
        onChangeItem={item =>  setGender(item.value)}
      />


      <Text style={styles.genderStyle}> Gender (male/female)</Text>
     
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
      <Text style={styles.iconStyle}>Select icon for this profile</Text>
      <TouchableOpacity
        disabled={isLoading}
        onPress={() => {
          navigation.navigate("Edit Other's Profile Taste");
          postData();

        }}
        style={styles.nextboxStyle}>
        <Text style={styles.nextStyle}>
          {isLoading && <ActivityIndicator size="small" />}
          Next
         </Text>
      </TouchableOpacity>
      <View style={styles.BoxStyle}> </View >
      <View style={styles.Box1Style}> </View >
      <View style={styles.Box2Style}> </View >
      <View style={styles.Box3Style}> </View >
      <View style={styles.Box4Style}> </View >
      <View style={styles.Box5Style}> </View >

      {people &&
        people.map(({ person, left, top }) => {
          return (

            <TouchableOpacity
              key={person.url}
              onPress={() => {
                setImage(person.url === image ? "" : person.url);
              }}
            >
              <Image
                source={{ uri: person.url }}
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

          );
        })}



    </View>)


};

const styles = StyleSheet.create({
  backStyle: {
    color: '#FF5733',
    fontSize: 12,
    top: 10,
    position: 'absolute',
  },
  BoxStyle: {
    color: '#FF5733',
    position: 'absolute',
    width: 85,
    height: 101,
    left: 38,
    top: 380,
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
    top: 380,
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
    top: 380,
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
    top: 498,
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
    top: 498,
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
    top: 498,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5733',
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
  nameStyle: {
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36,
    top: 93,
    textAlign: 'center'
  },
  nameboxStyle: {
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
    padding: 15,
  },
  genderStyle: {
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36.25,
    top: 146,
    textAlign: 'center'
  },

  ageStyle: {
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36.25,
    top: 199,
    textAlign: 'center'
  },
  ageboxStyle: {
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
    padding: 15,
  },
  weightStyle: {
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36.25,
    top: 252,
    textAlign: 'center'
  },
  weightboxStyle: {
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
    padding: 15
  },
  heightStyle: {
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36.25,
    top: 305,
    textAlign: 'center'
  },
  heightboxStyle: {
    color: '#FF5733',
    position: 'absolute',
    width: 302,
    height: 30,
    left: 36.75,
    top: 319,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5733',
    fontSize: 10,
    padding: 15,
  },
  iconStyle: {
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36.25,
    top: 362,
    textAlign: 'center'
  },
  nextboxStyle: {
    borderRadius: 24,
    width: 68,
    height: 24,
    left: 272,
    top: 627,
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

  greetStyle: {
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36.25,
    top: 56,
    textAlign: 'left'
  }



});


export default EditOthersProfileInfo;