import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SwitchSelector from "react-native-switch-selector";

const SearchScreen = ({ navigation }) => {
  return (

    <View>
      <Text style={styles.headerStyle}>Menu Filters</Text>
      <Text style={styles.forStyle}>For</Text>
      <Text style={styles.byStyle}>By</Text>
      <TouchableOpacity style={styles.profilePicStyle}> </TouchableOpacity>
      <View style={{
        borderBottomColor: '#FF910D',
        borderBottomWidth: 1,
        top: 328 }}/>
      <Text style={styles.optionStyle}> Difficulty Level{'\n'}Duration(min)</Text>
      <SwitchSelector
        style={styles.switchStyle}
        height='21'
        initial={1}
        textColor='#FF5733'
        selectedColor='white'
        buttonColor='#FF5733'
        borderColor='#FF5733'
        hasPadding
        options={[
          { label: "max", value: 0 },
          { label: "-", value: 1 },
          { label: "min", value: 1 },
        ]}
      />
      <SwitchSelector
        style={styles.switch1Style}
        height='21'
        initial={1}
        textColor='#FF5733'
        selectedColor='white'
        buttonColor='#FF5733'
        borderColor='#FF5733'
        hasPadding
        options={[
          { label: "max", value: 0 },
          { label: "-", value: 1 },
          { label: "min", value: 1 },
        ]}
      />
      <View style={{
        borderBottomColor: '#FF910D',
        borderBottomWidth: 1,
        top: 540}}/>
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
  switchStyle: {
    width: 120,
    left: 239,
    top: 375
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
    top: 72
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
    width: 120,
    height: 37,
    backgroundColor: "#FF5733",
    position: "absolute",
    left: 228,
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
    top: 607

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
    top: 601,
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
    width: 120,
    left: 239,
    top: 380
  }
});


export default SearchScreen;