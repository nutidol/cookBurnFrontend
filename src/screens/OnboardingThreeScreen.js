import React from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity,TextInput} from 'react-native';


const OnboardingThreeScreen=({navigation}) => {
    return(  
     <View>
         <Text style={styles.textOneStyle}>Please select the taste of {"\n"}menu you like</Text>
       <Text style={styles.textTwoStyle}> You can select more than one menu, the{"\n"}selection you made will be used to provide you{"\n"}the satisfying menus</Text>
       
       <TouchableOpacity  onPress={() => navigation.navigate('Home1')}
       style ={styles.nextboxStyle}>
                <Text  style ={styles.nextStyle}  >Next</Text>
        </TouchableOpacity>
        <Text style ={styles.point1Style}> . </Text>
        <Text style ={styles.point2Style}> . </Text>
        <Text style ={styles.point3Style}> . </Text>
        <View style ={styles.BoxStyle}>   </View >
    </View>
   
    );
};

const styles = StyleSheet.create({
    textOneStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        left: 39,
         top: 50,
         color: '#FF5733',
     },
     textTwoStyle:{
         position: 'absolute',
         fontSize: 12,
         left: 39.5,
         top: 100,
         color: '#FF5733',
     },
     nextboxStyle:{
         width: 120,
         height: 37,
         backgroundColor: '#FF5733',
         position:'absolute',
         left: 210,
         top: 725,
         borderRadius: 24,
         display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10 
     },
     nextStyle:{
         fontSize: 10,
         color: 'white',
         textAlign: 'center'
     },
     point1Style:{
        fontSize: 40,
        fontWeight: '700',
        color: '#FF910D',
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
        color: '#FF5733',
        position:'absolute',
        left: 200.5,
        top: 670,
    },
    BoxStyle:{
        width: 303,
        height: 494,
        borderRadius: 20,
        borderWidth: 1,
       borderColor: '#FF5733',
       position:'absolute',
       left: 35,
       top: 177
    }
   
});

export default OnboardingThreeScreen;