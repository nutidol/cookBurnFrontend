import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const TotalAddScreen = (navigation) => {
  const [menu, setMenu] = useState(0);

  useEffect(async () => {
    const id = await AsyncStorage.getItem("userID");
    const sk = await AsyncStorage.getItem("sk")
    const response = await fetch(
      "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/ingredientsPage/yourIngredients/123"
    );
    const data = await response.json();
    addDataToArray(data);
    console.log(data)
  }, []);

  const addDataToArray = (data) => {
    var array = [];
    var positionNameTop = -9;
    var positionImageTop = -12;
    var positionUnitTop = 11;
    for (var i in data) {
      positionImageTop += 104;
      positionNameTop += 104;
      positionUnitTop += 104;
      var dataWithPosition = {
        name: data[i].name, quantity: data[i].quantity, unit: data[i].unit, url: data[i].url, topName: positionNameTop, topImage: positionImageTop,
        topUnit: positionUnitTop
      }
      array.push(dataWithPosition)
    }
    setMenu(array);
  }
  return (
    <ScrollView>

      {menu && menu.map(({ name, url, quantity, unit, topImage, topName, topUnit }) => {
        return (

          <TouchableOpacity
            key={name}>
            <Text style={styles.headerStyle}>Your Ingredients</Text>
            <Image
              source={url}
              style={{
                width: 84,
                height: 84,
                left: 56,
                top: topImage,
                position: 'absolute',
              }} />

            <Text style={{
              left: 152.5,
              top: topName,
              color: '#FF5733',
              fontSize: 15,
              position: 'absolute',
              fontWeight: 'bold'
            }}>{name}</Text>

            <Text style={{
              left: 152.5,
              top: topUnit,
              color: '#FF5733',
              fontSize: 15,
              position: 'absolute'
            }}>{quantity}</Text>

            <Text style={{
              left: 175,
              top: topUnit,
              color: '#FF5733',
              fontSize: 15,
              position: 'absolute'
            }}>{unit}</Text>

          </TouchableOpacity>

        );
      })}

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Add")
        }}>
        <Text style={styles.backStyle}> &lt;&lt;back</Text>
      </TouchableOpacity>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
    color: "#FF5733",
    position: 'absolute',
    textAlign: "center",
    fontWeight: "bold",
    left: 36,
    top: 30
  },
  backStyle:{
    color: '#FF5733',
    fontSize: 12
  },

});


export default TotalAddScreen;