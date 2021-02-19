import React, { useState } from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity,TextInput,Button} from 'react-native';


const EditProfile2Screen= ({navigation}) => {
  
return(
    <View>
         
       <Text style={styles.headerStyle}>Your personal information</Text>
       <Text style={styles.subheaderStyle}>Please enter or edit your personal information, so we can {'\n'}calculate your daily information for you!</Text>
       <Text style={styles.genderStyle}> Gender (male/female)</Text>
        <TextInput style={styles.genderboxStyle}
        color = '#FF5733'
        autoCapitalize ='none'
        placeholder='gender'
        placeholderTextColor='#FF5733'
        />
       <Text style={styles.ageStyle}> Age(year)</Text>
       <TextInput style={styles.ageboxStyle}
        color = '#FF5733'
        autoCapitalize ='none'
        placeholder='age'
        placeholderTextColor='#FF5733'

        />
       <Text style={styles.weightStyle}> Weight(kg)</Text>
       <TextInput style={styles.weightboxStyle}
        color = '#FF5733'
        autoCapitalize ='none'
        placeholder='weight'
        placeholderTextColor='#FF5733'

        />
       <Text style={styles.heightStyle}> Height(cm)</Text>
       <TextInput style={styles.heightboxStyle}
        color = '#FF5733'
        autoCapitalize ='none'
        placeholder='height'
        placeholderTextColor='#FF5733'

        />
       <Text style={styles.iconStyle} >Select icon for your profile</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('EditProfile21')}
        style ={styles.nextboxStyle} >
            
                <Text style ={styles.nextStyle}> Next</Text>
        </TouchableOpacity>
        <View style ={styles.iconBox1Style}> pic1  </View >
        <View style ={styles.iconBox2Style}> pic2 </View >
     
        
    </View>
    
)

};

const styles = StyleSheet.create({
    headerStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 30,
        textAlign: 'center'
    },
    genderStyle:{
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 93,
        textAlign: 'center'
    },
    genderboxStyle:{
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
        padding: 7,
    },
    ageStyle:{
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 146,
        textAlign: 'center'
    },
    ageboxStyle:{
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 160,
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
        top: 199,
        textAlign: 'center'
    },
    weightboxStyle:{
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
        padding: 7,
    },
    heightStyle:{ 
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 252,
        textAlign: 'center'
    },
    heightboxStyle:{
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
        padding: 7,
    },
    iconStyle:{
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 304,
        textAlign: 'center'
    },
    nextboxStyle:{
        borderRadius: 24, 
        width: 68,
        height: 24,
        left: 272,
        top: 569,
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
       top: 327
    },
    iconBox2Style:{
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
       borderColor: '#FF5733',
       position:'absolute',
       left: 144,
       top: 327
    },
   subheaderStyle:{
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 56,
        textAlign: 'left'
    }
   
   


  
 
});


export default EditProfile2Screen;