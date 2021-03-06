import React, { useState } from 'react';
import { StyleSheet,Text, View , TouchableOpacity} from 'react-native';


const EditProfile22Screen= ({navigation}) => {
    return(  
        <View>
            <Text style={styles.headerStyle}>Your personal information</Text>
          <Text style={styles.subheaderStyle}>Please select the taste of menu you like. You can select{"\n"}more than one menu, the selection you made will be used to{"\n"}provide you the satisfying menus</Text>
          
          <TouchableOpacity  onPress={() => navigation.navigate('EditProfile1')}
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


export default EditProfile22Screen;