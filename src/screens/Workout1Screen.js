import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const Workout1Screen= ({navigation}) => {
  return(
      <View> 
          <Text style={styles.text1Style}> For Broccoli Chicken</Text>
          <Text style={styles.text2Style}> Burn: 500 cals</Text>
          <TouchableOpacity
                style={styles.doneBoxStyle}
                onPress={() => navigation.navigate('WorkoutScreen')}>
                <Text style={styles.doneStyle}> Done</Text>
         </TouchableOpacity>
         <View style={styles.exPic1Style}>  </View>
         <Text style={styles.exStyle}> Burpee X10</Text>
         <View style={styles.exPic2Style}>  </View>
      </View>
  )
};
const styles = StyleSheet.create({
    doneBoxStyle:{
        width: 120,
        height: 37,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 218,
        top: 692,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#FF5733",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    doneStyle:{
        fontSize: 10,
        color: "white",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        
    },
    text1Style:{
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 70
    },
    text2Style:{
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 99
    },
    exPic1Style:{
        width: 152,
        height: 117,
        borderRadius: 20,
        backgroundColor: '#FF5733',
        left: 51,
        top: 133
    },
    exPic2Style:{
        width: 152,
        height: 117,
        borderRadius: 20,
        backgroundColor: '#FF5733',
        left: 51,
        top: 150
    },
    exStyle:{
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 226,
        top: 153
    }
});


export default Workout1Screen;