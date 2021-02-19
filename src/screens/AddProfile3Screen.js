import React, { useState } from 'react';
import { StyleSheet,Text, View , TouchableOpacity} from 'react-native';


const AddProfile3Screen= ({navigation}) => {
    return(  
        <View>
            <Text style={styles.headerStyle}>Add Other's Profile</Text>
          <Text style={styles.subheaderStyle}>Please select the taste of menu he/she like. You can select{"\n"}more than one menu, the selection you made will be used to{"\n"}provide them the satisfying menus</Text>
          
          <TouchableOpacity  onPress={() => navigation.navigate('AddProfile4')}
          style ={styles.saveboxStyle}>
                   <Text  style ={styles.saveStyle}>Save</Text>
           </TouchableOpacity>
           
           <View style ={styles.BoxStyle}>   </View >
       </View>
      
       );

};

const styles = StyleSheet.create({
    headerStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        left: 36,
         top: 30,
         color: '#FF5733',
     },
     subheaderStyle:{
         position: 'absolute',
         fontSize: 10,
         left: 36,
         top: 56,
         color: '#FF5733',
     },
     saveboxStyle:{
         width: 68,
         height: 24,
         backgroundColor: '#FF5733',
         position:'absolute',
         left: 267,
         top: 632,
         borderRadius: 24,
         display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10 
     },
     saveStyle:{
         fontSize: 10,
         color: 'white',
         textAlign: 'center'
     },
    BoxStyle:{
        width: 303,
        height: 494,
        borderRadius: 20,
        borderWidth: 1,
       borderColor: '#FF5733',
       position:'absolute',
       left: 36,
       top: 107
    }
  
 
});


export default AddProfile3Screen;