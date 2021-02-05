import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import SwitchSelector from "react-native-switch-selector";



const Home2Screen = () => {
    const [Open, setOpen] = useState("")

  console.log(Open)
    return (

        <View  >
            <SwitchSelector
                onPress={value => setOpen({ value })}

                style={styles.switchStyle}
                initial={1}
                textColor='#FF5733'
                selectedColor='white'
                buttonColor='#FF5733'
                borderColor='#FF5733'
                hasPadding

                options={[
                    { label: "Cooked History", value: "0" },
                    { label: "Workout History", value: "1" }
                ]}
            />
           
            <View style={styles.boxStyle} >

                <Text style={styles.menuStyle}>Menu name: </Text>
                <Text style={styles.energyStyle}>enerygy: </Text>
                <Text style={styles.dateStyle}>date: </Text>
                <Text style={styles.timeStyle}>time: </Text>
            </View>

            <View style={styles.boxStyle}>
                <Text style={styles.menuStyle}>Workout for menu: </Text>
                <Text style={styles.energyStyle}>enerygy: </Text>
                <Text style={styles.dateStyle}>date: </Text>
                <Text style={styles.timeStyle}>time: </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    switchStyle: {
        width: 300,
        height: 37,
        left: 40,
        top: 117
    },
    boxStyle: {
        width: 305,
        height: 126,
        borderColor: '#FF5733',
        borderWidth: 1,
        left: 35,
        top: 358
    },
    menuStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        left: 130,
        top: 30
    },
    energyStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        left: 130,
        top: 50
    },
    dateStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        left: 130,
        top: 70

    },
    timeStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        textAlign: 'center',
        left: 130,
        top: 90

    }
})

export default Home2Screen;