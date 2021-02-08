import React, { useState } from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity,TextInput,Button} from 'react-native';


const AddProfile1Screen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.headerStyle}>Add Other's Profile</Text>
      <Text style={styles.greetStyle}>Please enter or edit your personal information, so we can {'\n'}calculate your daily information for you!</Text>
      <Text style={styles.nameStyle}>Name</Text>
      <TextInput style={styles.nameboxStyle}
        color='#FF5733'
        autoCapitalize='none'
        placeholder='name'
        placeholderTextColor='#FF5733'
      />
      <Text style={styles.genderStyle}> Gender (male/female)</Text>
      <TextInput style={styles.genderboxStyle}
        color='#FF5733'
        autoCapitalize='none'
        placeholder='gender'
        placeholderTextColor='#FF5733'
      />
      <Text style={styles.ageStyle}> Age(year)</Text>
      <TextInput style={styles.ageboxStyle}
        color='#FF5733'
        autoCapitalize='none'
        placeholder='age'
        placeholderTextColor='#FF5733'

      />
      <Text style={styles.weightStyle}> Weight(kg)</Text>
      <TextInput style={styles.weightboxStyle}
        color='#FF5733'
        autoCapitalize='none'
        placeholder='weight'
        placeholderTextColor='#FF5733'

      />
      <Text style={styles.heightStyle}> Height(cm)</Text>
      <TextInput style={styles.heightboxStyle}
        color='#FF5733'
        autoCapitalize='none'
        placeholder='height'
        placeholderTextColor='#FF5733'

      />
      <Text style={styles.iconStyle} >Select icon for your profile</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddProfile2')}
        style={styles.nextboxStyle} >

        <Text style={styles.nextStyle}> Next</Text>
      </TouchableOpacity>
      <View style={styles.iconBox1Style}> pic1  </View >
      <View style={styles.iconBox2Style}> pic2 </View >


    </View>)


};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
    color: "#FF5733",
    position: 'absolute',
    textAlign: "center",
    fontWeight: "bold",
    left: 36,
    top: 70
},
  nameStyle:{
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36,
    top: 133,
    textAlign: 'center'
},
nameboxStyle:{
    color: '#FF5733',
    position: 'absolute',
    width: 302,
    height: 30,
    left: 36.75,
    top: 147,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5733',
    fontSize: 10,
    padding: 7,
},
genderStyle:{
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36.25,
    top: 186,
    textAlign: 'center'
},
genderboxStyle:{
    color: '#FF5733',
    position: 'absolute',
    width: 302,
    height: 30,
    left: 36.75,
    top: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5733',
    fontSize: 10,
    padding: 7,

},
ageStyle:{
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36.25,
    top: 239,
    textAlign: 'center'
},
ageboxStyle:{
    color: '#FF5733',
    position: 'absolute',
    width: 302,
    height: 30,
    left: 36.75,
    top: 253,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5733',
    fontSize: 10,
    padding: 7,
},
weightStyle:{ 
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36.25,
    top: 292,
    textAlign: 'center'
},
weightboxStyle:{
    color: '#FF5733',
    position: 'absolute',
    width: 302,
    height: 30,
    left: 36.75,
    top: 306,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5733',
    fontSize: 10,
    padding: 7,
},
heightStyle:{ 
  fontSize: 10,
  color: '#FF5733',
  position: 'absolute',
  left: 36.25,
  top: 345,
  textAlign: 'center'
},
heightboxStyle:{
  color: '#FF5733',
  position: 'absolute',
  width: 302,
  height: 30,
  left: 36.75,
  top: 359,
  backgroundColor: 'white',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#FF5733',
  fontSize: 10,
  padding: 7,
},
iconStyle:{
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36.25,
    top: 402,
    textAlign: 'center'
},
nextboxStyle:{
    borderRadius: 24, 
    width: 68,
    height: 24,
    left: 272,
    top: 667,
    backgroundColor: '#FF5733',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
},
nextStyle:{
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
},
iconBox1Style:{
    width: 88,
    height: 101,
    borderRadius: 8,
    borderWidth: 1,
    position:'absolute',
   borderColor: '#FF5733',
   left: 37,
   top: 425
},
iconBox2Style:{
    width: 88,
    height: 101,
    borderRadius: 8,
    borderWidth: 1,
   borderColor: '#FF5733',
   position:'absolute',
   left: 144,
   top: 425
},
greetStyle:{
    fontSize: 10,
    color: '#FF5733',
    position: 'absolute',
    left: 36.25,
    top: 96,
    textAlign: 'left'
}



});


export default AddProfile1Screen;