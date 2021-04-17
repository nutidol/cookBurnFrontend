import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SwitchSelector from "react-native-switch-selector";


const Home2Screen = ({navigation}) => {
    
    const [Open, setOpen] = useState(0)


  console.log(Open)
    return (
        
        <View  >
           <Text style={styles.HeaderStyle}> Your History</Text>
            {/* <SwitchSelector
                onPress={value => setOpen({ value })}
                style={styles.switchStyle}
                initial={0}
                textColor='#FF5733'
                selectedColor='white'
                buttonColor='#FF5733'
                borderColor='#FF5733'
                hasPadding
                options={[
                    { label: "Cooked History", value: 0 },
                    { label: "Workout History", value: 1 }
                ]}
            /> */}
           
           

        </View>

    )
}

const styles = StyleSheet.create({
    switchStyle: {
        width: 300,
        height: 37,
        left: 40,
        top: 77
    },
    box1Style: {
        width: 305,
        height: 126,
        borderColor: '#FF5733',
        borderWidth: 1,
        left: 35,
        top: 160
    },
    box2Style: {
        width: 305,
        height: 126,
        borderColor: '#FF5733',
        borderWidth: 1,
        left: 35,
        top: 260
    },

    HeaderStyle:{
        fontSize: 20,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        left: 36,
        top: 30 ,
        fontWeight: 'bold',
    }
})

export default Home2Screen;
