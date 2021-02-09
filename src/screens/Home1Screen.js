import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home1Screen = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(true)
    return (<View>
        <Modal visible={modalOpen} animationType='slide'>
            <View style={styles.modalContent}>
                <MaterialIcons
                    style={{ ...styles.modalToggle, ...styles.modalClose }}
                    name='close'
                    size={24}
                    color='#FF5733'
                    onPress={() => setModalOpen(false)} />
                <Text style={styles.welcomeStyle}>Welcome to the</Text>
                <Text style={styles.cookburnStyle}>CookBurn!</Text>
                <Image style={styles.logoStyle}
                    source={require('../../assets/cookburn.png')} />
                <Text style={styles.enjoyStyle}>Enjoy:)</Text>
            </View>
        </Modal>

        <Text style={styles.dailyStyle}> Your daily information </Text>
        <Text style={styles.recentStyle}> Your recent activities </Text>
        <Text style={styles.historyStyle} onPress={() => navigation.navigate('Home2')}> See full history &gt; </Text>
        <TouchableOpacity style={styles.boxStyle}
        onPress={() => navigation.navigate('Home2')}>
            <Text style={styles.menuStyle}>Menu name: </Text>
            <Text style={styles.energyStyle}>enerygy: </Text>
            <Text style={styles.dateStyle}>date: </Text>
            <Text style={styles.timeStyle}>time: </Text>
        </TouchableOpacity>

    </View>

    );
};

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 100,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    },
    logoStyle: {
        width: 157.4,
        height: 157.4,
        position: 'absolute',
        left: 109,
        top: 327,
        zIndex: 5,
        alignItems: 'center'
    },
    welcomeStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 118,
        top: 248,
        textAlign: 'center'
    },
    cookburnStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 143,
        top: 281,
        textAlign: 'center'
    },
    enjoyStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 155,
        top: 520,
        textAlign: 'center'
    },
    dailyStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 70,
        textAlign: 'center'
    },
    recentStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 304,
        textAlign: 'center'
    },
    historyStyle: {
        fontSize: 15,
        color: '#FF5733',
        position: 'absolute',
        left: 36,
        top: 333,
        textAlign: 'center'
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


});

export default Home1Screen;
