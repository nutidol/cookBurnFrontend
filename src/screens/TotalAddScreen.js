import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const TotalAddScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Your Ingredients</Text>
      <DropDownPicker
                items={[
                    { label: 'All', value: '0' },
                    { label: 'Meat', value: '1' },
                    { label: 'Dairy', value: '2' },
                    { label: 'Veggie and Fruits', value: '3' },
                    { label: 'Grains', value: '4' },
                    { label: 'Condiments', value: '5' },
                    { label: 'Others', value: '6' },
                ]}
                defaultIndex={0}
                placeholder="select ingredients type"
                containerStyle={{ height: 26, width: 200, top: 101, left: 40, position: 'absolute' }}
                labelStyle={{ color: "#FF5733" }}
                onChangeItem={item => console.log(item.label, item.value)}
            />
            <View style={styles.picStyle}> </View>
            <Text style={styles.igdStyle}>Ingredient name {'\n'} amount</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "#FF5733",
    position: 'absolute',
    textAlign: "center",
    fontWeight: "bold",
    left: 36,
    top: 70
  },
  picStyle:{
    width: 84,
    height: 84,
    backgroundColor: '#FF5733',
    left: 36,
    top: 138,
    borderRadius: 20
  },
  igdStyle:{
    color: '#FF5733',
    fontSize: 15,
    color: "#FF5733",
    position: 'absolute',
    textAlign: "center",
    fontWeight: "bold",
    left: 152.5,
    top: 159

  }
});


export default TotalAddScreen;