import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, Image, } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { TextInput } from 'react-native-gesture-handler';
import SwitchSelector from "react-native-switch-selector";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SearchScreen = ({ navigation }) => {
  const [pic, setPic] = useState([]);
  const [name, setName] = useState("");
  //const [isLoading, setLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);


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
    var positionTop = 70;
    var positionLeft = 47;
    for (var i in data) {
      var dataWithPosition = { url: data[i].url, top: positionTop, left: positionLeft }

      if (i % 3 === 0) {
        positionLeft += 96
      } else if (i % 3 === 1) {
        positionLeft += 192
      }
      // else if( i%3 ===2){
      //   positionLeft+= 96
      // }
      array.push(dataWithPosition)
    }
    setPic(array)
    console.log(pic)
  }

  return (
    <View>
      <Text style={styles.headerStyle}>Menu Filters</Text>
      <Text style={styles.forStyle}>For</Text>
      <Text style={styles.subforStyle}>(You can select more than 1 person)</Text>
      <Text style={styles.byStyle}>By</Text>
      <TouchableOpacity style={styles.profilePicStyle}> </TouchableOpacity>
      <View style={{
        borderBottomColor: '#FF910D',
        borderBottomWidth: 1,
        top: 295
      }} />
      <View style={styles.tableuStyle}>
        <Text style={styles.textStyle}>Duration(minutes)</Text>
        {/* <SwitchSelector
        style={styles.switchStyle}
          initial={1}
          height={19}
          textColor='#FF5733'
          selectedColor='white'
          buttonColor='#FF5733'
          borderColor='#FF5733'
          options={[
            { label: "max", value: 0 },
            { label: "min", value: 1 },
          ]}
           /> */}
      </View>

      <View style={styles.tableu1Style}>
        <Text style={styles.textStyle}>Energy(kcal)</Text>
        {/* <SwitchSelector
         style={styles.switch1Style}
        height={19}
        initial={1}
        textColor='#FF5733'
        selectedColor='white'
        buttonColor='#FF5733'
        borderColor='#FF5733'
        options={[
          { label: "max", value: "max" },
          { label: "min", value: "min" },
        ]}
      /> */}

      </View>
      <View style={styles.tableu2Style}>
        <Text style={styles.textStyle}>Total fat(g)</Text>

      </View>
      <View style={styles.tableu3Style}>
        <Text style={styles.textStyle}>Carbohydrate(g)</Text>

      </View>
      <View style={styles.tableu4Style}>
        <Text style={styles.textStyle}>Sugar(g)</Text>

      </View>
      <View style={styles.tableu5Style}>
        <Text style={styles.textStyle}>Protein(g)</Text>

      </View>
      <View style={styles.tableu6Style}>
        <Text style={styles.textStyle}>Sodium(mg)</Text>

      </View>


      <View style={{
        borderBottomColor: '#FF910D',
        borderBottomWidth: 1,
        top: 575
      }} />
      <TouchableOpacity
        style={styles.generateBoxStyle}
        onPress={() => navigation.navigate('Search1')}>
        <Text style={styles.generateStyle}> Generate</Text>
      </TouchableOpacity>
      <Text style={styles.servingStyle}>Serving Size</Text>
      <TextInput style={styles.servingBoxStyle}
        color='#FF5733'
        textAlign='center'
        defaultValue={1} />



      {pic && pic.map(({ url,left, top }) => {  
          return(
         
         <TouchableOpacity> 
            <Image
              source={url}
              style={{
                width: 88,
                height: 101,
                left,
                top,
                position: 'absolute',
                // opacity: isSelected(person.url) ? 1 : 0.3,
                
              }}
            />
          </TouchableOpacity> 
          );
})}    


      {/* {name && name.map(({ profileName, left, top }) => {
        return (

          <TouchableOpacity>
            <Text style={{ left, top, color: "#FF5733", fontSize: 10, fontWeight: "bold", position: 'absolute'}}>{profileName}</Text>
          </TouchableOpacity>

        );
      })} */}


    </View>
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
  tableuStyle: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 345,
    backgroundColor: '#FDCD94',
    zIndex: 1
  },
  tableu1Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 376,
    backgroundColor: '#EAE8E8',
    zIndex: 1,
  },
  tableu2Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 407,
    backgroundColor: '#FDCD94',
    zIndex: 1
  },
  tableu3Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 438,
    backgroundColor: '#EAE8E8',
    zIndex: 1
  },
  tableu4Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 469,
    backgroundColor: '#FDCD94',
    zIndex: 1
  },
  tableu5Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 500,
    backgroundColor: '#EAE8E8',
    zIndex: 1
  },
  tableu6Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 531,
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
    width: 120,
    left: 163,

  },
  switch1Style: {
    width: 120,
    left: 163,
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
    top: 310
  },

  generateStyle: {
    fontSize: 10,
    color: "white",
    position: 'absolute',
    textAlign: "center",
    fontWeight: "bold",
  },
  generateBoxStyle: {
    width: 75,
    height: 24,
    backgroundColor: "#FF5733",
    position: "absolute",
    left: 240,
    top: 645,
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
    top: 597

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
    top: 590,
    color: '#FF5733',
    fontSize: 10,
    paddingHorizontal: 30
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