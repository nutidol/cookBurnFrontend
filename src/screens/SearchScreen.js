import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SwitchSelector from "react-native-switch-selector";

const SearchScreen = ({ navigation }) => {
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
        top: 328
      }} />
      <View style={styles.tableuStyle}>
        <Text style={styles.textStyle}>Duration(minutes)</Text>
        <SwitchSelector
        style={styles.switchStyle}
        initial={1}
        height = {21}
        textColor='#FF5733'
        selectedColor='white'
        buttonColor='#FF5733'
        borderColor='#FF5733'
        hasPadding
        options={[
          { label: "max", value: 0 },
          { label: "min", value: 1 },
        ]}
      />
      </View>

      <View style={styles.tableu1Style}>
        <Text style={styles.textStyle}>Energy(kcal)</Text>

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
        <Text style={styles.textStyle}>Sodium(g)</Text>

      </View>

      <SwitchSelector
        style={styles.switch1Style}
        height={21}
        initial={1}
        textColor='#FF5733'
        selectedColor='white'
        buttonColor='#FF5733'
        borderColor='#FF5733'
        hasPadding
        options={[
          { label: "max", value: 0 },
          { label: "min", value: 1 },
        ]}
      />
      <View style={{
        borderBottomColor: '#FF910D',
        borderBottomWidth: 1,
        top: 540
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
    padding: 7,
    fontSize: 15,
  },
  tableuStyle: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 356,
    backgroundColor: '#FDCD94',
    zIndex: 1
  },
  tableu1Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 387,
    backgroundColor: '#EAE8E8',
    zIndex: 1
  },
  tableu2Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 418,
    backgroundColor: '#FDCD94',
    zIndex: 1
  },
  tableu3Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 449,
    backgroundColor: '#EAE8E8',
    zIndex: 1
  },
  tableu4Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 480,
    backgroundColor: '#FDCD94',
    zIndex: 1
  },
  tableu5Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 511,
    backgroundColor: '#EAE8E8',
    zIndex: 1
  },
  tableu6Style: {
    width: 302,
    height: 31,
    position: 'absolute',
    left: 37,
    top: 542,
    backgroundColor: '#FDCD94',
    zIndex: 1
  },

  subforStyle: {
    fontSize: 10,
    color: "#FF5733",
    position: 'absolute',
    textAlign: "center",
    left: 71,
    top: 65
  },
  switchStyle: {
    width: 120,
    left: 239,
    top: 375,
    zIndex: 5
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
    top: 346
  },
  profilePicStyle: {
    width: 88,
    height: 101,
    left: 37,
    top: 95,
    position: 'absolute',
    borderColor: '#FF5733',
    borderRadius: 8,
    borderWidth: 1
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
  switch1Style: {
    width: 110,
    left: 220,
    top: 362,
    zIndex: 5
  }
});


export default SearchScreen;