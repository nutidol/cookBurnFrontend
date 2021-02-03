import React from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity,TextInput,Button} from 'react-native';


const OnboardingOneScreen=({navigation}) => {
    return(  
     <View>
         
       <Text style={styles.personalStyle}> Please enter your {"\n"}personal onformation</Text>
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
       <TouchableOpacity  onPress={() => navigation.navigate('Welcome')}
       style ={styles.skipboxStyle} >
                <Text style ={styles.skipStyle} >Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('On2')}
        style ={styles.nextboxStyle} >
            
                <Text style ={styles.nextStyle}> Next</Text>
        </TouchableOpacity>
       
       
        <Text style ={styles.point1Style}> . </Text>
        <Text style ={styles.point2Style}> . </Text>
        <Text style ={styles.point3Style}> . </Text>
        <View style ={styles.iconBox1Style}> pic1  </View >
        <View style ={styles.iconBox2Style}> pic2 </View >
        <View style ={styles.iconBox3Style}> pic3 </View >
        <View style ={styles.iconBox4Style}> pic4  </View >
        <View style ={styles.iconBox5Style}> pic5 </View >
        <View style ={styles.iconBox6Style}> pic6 </View >
        
    </View>
   

    );
};

const styles = StyleSheet.create({
    personalStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 39,
        top: 50,
        textAlign: 'center'
    },
    genderStyle:{
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 115,
        textAlign: 'center'
    },
    genderboxStyle:{
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 129,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        fontSize: 10
    },
    ageStyle:{
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 168,
        textAlign: 'center'
    },
    ageboxStyle:{
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 182,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        fontSize: 10

    },
    weightStyle:{
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 221,
        textAlign: 'center'
    },
    weightboxStyle:{
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 235,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        fontSize: 10
    },
    heightStyle:{ 
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 274,
        textAlign: 'center'
    },
    heightboxStyle:{
        color: '#FF5733',
        position: 'absolute',
        width: 302,
        height: 30,
        left: 36.75,
        top: 288,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        fontSize: 10,
    },
    iconStyle:{
        fontSize: 10,
        color: '#FF5733',
        position: 'absolute',
        left: 36.25,
        top: 326,
        textAlign: 'center'
    },
    skipboxStyle:{
        width: 120,
        height: 37,
        backgroundColor: 'white',
        position:'absolute',
        left: 45,
        top: 725,
        borderRadius: 24, 
        borderWidth: 1,
        borderColor: '#FF5733',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    nextboxStyle:{
        borderRadius: 24, 
        width: 120,
        height: 37,
        left: 210,
        top: 725,
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
    skipStyle:{
        fontSize: 10,
        color: '#FF5733',
        textAlign: 'center'
    },

    point1Style:{
        fontSize: 40,
        fontWeight: '700',
        color: '#FF5733',
        position:'absolute',
        left: 168.5,
        top: 670,

    },
    point2Style:{
        fontSize: 40,
        fontWeight: '700',
        color: '#FF910D',
        position:'absolute',
        left: 184.5,
        top: 670,
    },
    point3Style:{
        fontSize: 40,
        fontWeight: '700',
        color: '#FF910D',
        position:'absolute',
        left: 200.5,
        top: 670,
    },
    iconBox1Style:{
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
        position:'absolute',
       borderColor: '#FF5733',
       left: 37,
       top: 349
    },
    iconBox2Style:{
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
       borderColor: '#FF5733',
       position:'absolute',
       left: 144,
       top: 349
    },
    iconBox3Style:{
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
       borderColor: '#FF5733',
       position:'absolute',
       left: 251,
       top: 349
    },
    iconBox4Style:{
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
       borderColor: '#FF5733',
       position:'absolute',
       left: 37,
       top: 470
    },
    iconBox5Style:{
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
       borderColor: '#FF5733',
       position:'absolute',
       left: 144,
       top: 470
    },
    iconBox6Style:{
        width: 88,
        height: 101,
        borderRadius: 8,
        borderWidth: 1,
       borderColor: '#FF5733',
       position:'absolute',
       left: 251,
       top: 470
    }






   
});

export default OnboardingOneScreen;